import { Injectable, OnDestroy } from '@angular/core';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { ModalDeleteComponent } from '../components/modal/modal-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioDrawer } from '../components/drawer/usuario-drawer.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUsuarioUsecase } from '@data/usuarios/usecases/update-usuario.usecase';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioConfigService implements OnDestroy {
  private drawerCloseSubscription!: Subscription;
  private _deleteUser = new Subject<void>();
  usuario: IUsuarioModel | null = null;
  formUsuario!: FormGroup;
  loading = false

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private location: Location,
    private drawerService: DrawerService,
    private updateUserUsecase: UpdateUsuarioUsecase,
    private snackbarService: SnackbarService
  ) {
    this.drawerCloseSubscription = this.drawerService.onClose().subscribe(() => {
      setTimeout(() => {
        this.router.navigate([], {
          queryParams: {
            drawer: null,
            drawerTab: null,
          },
          queryParamsHandling: 'merge'
        })
      }, 300);
    });
  }

  openDrawer(usuario: IUsuarioModel) {
    const url = this.router.createUrlTree([], {
      queryParams: { 
        drawer: 'usuarioDrawer',
        drawerTab: 'informacion',
      },
      queryParamsHandling: 'merge'
    }).toString();

    this.location.go(url)

    this.usuario = usuario
    this.formUsuario = new FormGroup({
      nombres: new FormControl<string>(usuario.nombres, [Validators.required]),
      apellidos: new FormControl<string>(usuario.apellidos, [Validators.required]),
      password: new FormControl<string>(''),
      confirmPassword: new FormControl<string>(''),
      grupos: new FormControl<number[]>(usuario.grupos.map(g => g.id)),
      updatePassword: new FormControl<boolean>(false)
    })
    this.drawerService.open(UsuarioDrawer)

  }

  closeDrawer() {
    this.drawerService.close()
  }

  openDelete() {
    if (this.usuario) {
      const dialogRef = this.dialog.open(ModalDeleteComponent, {
        data: {
          id: this.usuario?.id
        }
      })
      dialogRef.afterClosed().subscribe(hasDeleted => {
        if (hasDeleted) {
          this._deleteUser.next()
        }
      })
    }
  }

  hasDeleted() {
    return this._deleteUser.asObservable()
  }

  hasError(field: string, path: string) {
    return this.formUsuario.get(field)?.hasError(path)
  }

  getErrors(field: string) {
    return this.formUsuario.get(field)?.getError('errors')
  }

  updateUser() {
    if (this.usuario) {
      this.formUsuario.markAllAsTouched()
      if (this.formUsuario.valid) {
        this.loading = true
        this.updateUserUsecase.execute({
          id: this.usuario.id,
          ...this.formUsuario.value
        }).subscribe({
          next: (res) => {
            if (res.status !== 200) {
              res.errors?.forEach((err) => {
                this.formUsuario.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
              })
              this.snackbarService.open({ 
                mensaje: res.message || 'Ha ocurrido un error al intentar actualizar el usuario, revise sus datos o consulte a su administrador',
                type: 'error'
              })
            } else {
              this.snackbarService.open({
                mensaje: res.message || 'Usuario actualizado exitosamente',
                type: 'success'
              })
            }
            this.loading = false
          },
          error: (err) => {
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error'
            })
            this.loading = false
          }
        })
      }
    }
  }

  ngOnDestroy() {
    if (this.drawerCloseSubscription) {
      this.drawerCloseSubscription.unsubscribe();
    }
  }
}