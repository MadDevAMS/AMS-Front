import { Injectable, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IGrupoModel } from "@data/grupos/models/grupo.model";
import { UpdateGrupoUsecase } from "@data/grupos/usecases/update-grupo.usecase";
import { IPermisoModel } from "@data/permisos/models/permiso.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";
import { SnackbarService } from "@ui/shared/services/snackbar.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalDeleteComponent } from "../components/modal/modal-delete.component";
import { GrupoFormAbstract } from "./grupo-form-abstract";
import { Subject, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { DrawerService } from "@ui/dashboard/shared/services/drawer.service";
import { GruposDrawer } from "../components/drawer/grupo-drawer.component";

@Injectable({ 
  providedIn: 'root' 
})
export class GrupoConfigService extends GrupoFormAbstract implements OnDestroy {
  private drawerCloseSubscription!: Subscription;
  private _deleteUser = new Subject<void>()
  usuariosSeleccionados: IUsuarioModel[] = [];
  permisosSeleccionados: IPermisoModel[] = [];
  formGrupo!: FormGroup;
  formUsuarios!: FormGroup;
  formPermisos!: FormGroup;
  grupo: IGrupoModel | null = null;

  constructor(
    private updateGrupoUsecase: UpdateGrupoUsecase,
    private drawerService: DrawerService,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private router: Router,
    private location: Location
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
  
  openDrawer(grupo: IGrupoModel) {
    const url = this.router.createUrlTree([], {
      queryParams: { 
        drawer: 'grupoDrawer',
        drawerTab: 'informacion',
      },
      queryParamsHandling: 'merge'
    }).toString();

    this.location.go(url);

    this.grupo = grupo;

    this.formGrupo = new FormGroup({
      nombre: new FormControl<string>(grupo.nombre, [Validators.required]),
      descripcion: new FormControl<string>(grupo.descripcion || '', [Validators.required]),
    });

    this.formPermisos = new FormGroup({
      idPermisos: new FormControl<number[]>(grupo.permisos.map(p => p.id)),
    });

    this.formUsuarios = new FormGroup({
      idUsuarios: new FormControl<number[]>(grupo.usuarios.map(p => p.id)),
    });

    // this.permisosSeleccionados = grupo.permisos
    // this.usuariosSeleccionados = grupo.usuarios

    this.drawerService.open(GruposDrawer);
  }

  closeDrawer() {
    this.drawerService.close();
  }

  openDelete() {
    if (this.grupo) {
      const dialogRef = this.dialog.open(ModalDeleteComponent, {
        data: {
          id: this.grupo?.id
        }
      });
      dialogRef.afterClosed().subscribe(hasDeleted => {
        if (hasDeleted) {
          this._deleteUser.next();
        }
      });
    }
  }
  
  override isChecked(item: IUsuarioModel | IPermisoModel, type: 'permiso' | 'usuario'): boolean {
    const array = this.formGrupo.get(type === 'permiso' ? 'idPermisos' : 'idUsuarios')
    return array?.value?.some((id: number) => id === item.id)
  }

  override onCheckboxChange(item: IUsuarioModel | IPermisoModel, type: 'permiso' | 'usuario'): void {
    const formField = this.formGrupo.get(type === 'permiso' ? 'idPermisos' : 'idUsuarios')
    if (!this.isChecked(item, type)) {
      formField?.value.push(item.id)
      type === 'permiso' ?
        this.permisosSeleccionados.push(item as IPermisoModel) :
        this.usuariosSeleccionados.push(item as IUsuarioModel)
    } else {
      const index = formField?.value.findIndex((x: number) => x === item.id);
      formField?.value.splice(index, 1);
      if (type === 'permiso') {
        this.permisosSeleccionados = this.permisosSeleccionados.filter(g => g.id !== item.id)
      } else {
        this.usuariosSeleccionados = this.usuariosSeleccionados.filter(g => g.id !== item.id)
      }
    }
  }

  override showInfoModalUsuario(usuario: IUsuarioModel, type: "permisos" | "grupos"): void { }

  hasError(field: string, type: string) {
    return this.formGrupo.get(field)?.hasError(type);
  }

  hasDeleted() {
    return this._deleteUser.asObservable();
  }

  limpiar() {
    this.grupo = null;
    this.formGrupo.reset({
      nombre: '',
      descripcion: '',
      idPermisos: [],
      idUsuarios: []
    });
  }

  submit() {
    this.formGrupo.markAllAsTouched();
    if (this.formGrupo.valid) {
      this.updateGrupoUsecase.execute({
        id: 12,
        ...this.formGrupo.value
      }).subscribe({
        next: (res) => {
          if (res.status !== 200) {
            res.errors?.forEach((err) => {
              this.formGrupo.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar actualizar el grupo, revise sus datos o consulte a su administrador',
              type: 'error'
            })
          } else {
            this.snackbarService.open({
              mensaje: res.message || 'Grupo actualizado exitosamente',
              type: 'success'
            })
          }
        },
        error: (err) => {
          this.snackbarService.open({
            mensaje: err.message,
            type: 'error'
          })
        }
      })
    }
  }

  ngOnDestroy() {
    if (this.drawerCloseSubscription) {
      this.drawerCloseSubscription.unsubscribe();
    }
  }
}
