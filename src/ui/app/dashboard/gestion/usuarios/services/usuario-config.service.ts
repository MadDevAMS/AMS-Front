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
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { UsuarioFormAbstract } from './usuario-form-abstract';

@Injectable({
  providedIn: 'root'
})
export class UsuarioConfigService extends UsuarioFormAbstract implements OnDestroy {
  private drawerCloseSubscription!: Subscription;
  private _deleteUser = new Subject<void>();
  hidePassword = true;
  usuario: IUsuarioModel | null = null;
  formNombresApellidos!: FormGroup;
  formPassword!: FormGroup;
  formGrupos!: FormGroup;
  loading = false;
  gruposSeleccionados: IGrupoModel[] = []

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private location: Location,
    private drawerService: DrawerService,
    private updateUserUsecase: UpdateUsuarioUsecase,
    private snackbarService: SnackbarService
  ) {
    super()
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

  onCheckboxChange(grupo: IGrupoModel) {
    const grupos = this.formGrupos.get('grupos');
    if (!this.isChecked(grupo)) {
      grupos?.value.push(grupo.id)
      this.gruposSeleccionados.push(grupo)
    } else {
      const index = grupos?.value.findIndex((x: number) => x === grupo.id);
      grupos?.value.splice(index, 1);
      this.gruposSeleccionados = this.gruposSeleccionados.filter(g => g.id !== grupo.id)
    }
  }

  isChecked(grupo: IGrupoModel): boolean {
    const grupos = this.formGrupos.get('grupos');
    return grupos?.value?.some((x: number) => x === grupo.id);
  }

  openDrawer(usuario: IUsuarioModel) {
    const url = this.router.createUrlTree([], {
      queryParams: { 
        drawer: 'usuarioDrawer',
        drawerTab: 'informacion',
      },
      queryParamsHandling: 'merge'
    }).toString();

    this.location.go(url);

    this.usuario = usuario;

    this.formNombresApellidos = new FormGroup({
      nombres: new FormControl<string>(usuario.nombres, [Validators.required]),
      apellidos: new FormControl<string>(usuario.apellidos, [Validators.required]),
      grupos: new FormControl<number[]>(usuario.grupos.map(g => g.id)),
      updatePassword: new FormControl<boolean>(false)
    });

    this.formPassword = new FormGroup({
      nombres: new FormControl<string>(usuario.nombres),
      apellidos: new FormControl<string>(usuario.apellidos),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
      grupos: new FormControl<number[]>(usuario.grupos.map(g => g.id)),
      updatePassword: new FormControl<boolean>(true)
    });

    this.formGrupos = new FormGroup({
      nombres: new FormControl<string>(usuario.nombres),
      apellidos: new FormControl<string>(usuario.apellidos),
      grupos: new FormControl<number[]>(usuario.grupos.map(g => g.id)),
      updatePassword: new FormControl<boolean>(false)
    });

    this.drawerService.open(UsuarioDrawer);
  }

  closeDrawer() {
    this.drawerService.close();
  }

  openDelete() {
    if (this.usuario) {
      const dialogRef = this.dialog.open(ModalDeleteComponent, {
        data: {
          id: this.usuario?.id
        }
      });
      dialogRef.afterClosed().subscribe(hasDeleted => {
        if (hasDeleted) {
          this._deleteUser.next();
        }
      });
    }
  }

  hasDeleted() {
    return this._deleteUser.asObservable();
  }

  hasError(form: FormGroup, field: string, path: string) {
    return form.get(field)?.hasError(path);
  }

  getErrors(form: FormGroup, field: string) {
    return form.get(field)?.getError('errors');
  }

  updateNombresApellidos() {
    this.updateUsuario(this.formNombresApellidos);
  }

  updatePassword() {
    this.updateUsuario(this.formPassword);
  }

  updateGrupos() {
    this.updateUsuario(this.formGrupos);
  }

  private updateUsuario(form: FormGroup) {
    if (this.usuario) {
      form.markAllAsTouched();
      if (form.valid) {
        this.loading = true;
        this.updateUserUsecase.execute({
          id: this.usuario.id,
          ...form.value
        }).subscribe({
          next: (res) => {
            if (res.status !== 200) {
              res.errors?.forEach((err) => {
                form.get(err.propertyName)?.setErrors({ errors: err.errorMessage });
              });
              this.snackbarService.open({ 
                mensaje: res.message || 'Ha ocurrido un error al intentar actualizar el usuario, revise sus datos o consulte a su administrador',
                type: 'error'
              });
            } else {
              this.snackbarService.open({
                mensaje: res.message || 'Usuario actualizado exitosamente',
                type: 'success'
              });
            }
            this.loading = false;
          },
          error: (err) => {
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error'
            });
            this.loading = false;
          }
        });
      }
    }
  }

  ngOnDestroy() {
    if (this.drawerCloseSubscription) {
      this.drawerCloseSubscription.unsubscribe();
    }
  }
}