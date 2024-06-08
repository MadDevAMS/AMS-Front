import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IGrupoModel } from "@data/grupos/models/grupo.model";
import { CreateGrupoUsecase } from "@data/grupos/usecases/create-grupo.usecase";
import { UpdateGrupoUsecase } from "@data/grupos/usecases/update-grupo.usecase";
import { IPermisoModel } from "@data/permisos/models/permiso.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";
import { SnackbarService } from "@ui/shared/services/snackbar.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalDeleteComponent } from "../components/modal/modal-delete.component";

@Injectable({ 
  providedIn: 'platform' 
})
export class GrupoFormService {
  grupoSeleccionado: IGrupoModel | null = null;
  formGrupo: FormGroup;

  constructor(
    private updateGrupoUsecase: UpdateGrupoUsecase,
    private createGrupoUsecase: CreateGrupoUsecase,
    private dialog: MatDialog,
    private snackbarService: SnackbarService
  ) {
    this.formGrupo = new FormGroup({
      nombre: new FormControl<string>('', [Validators.required]),
      descripcion: new FormControl<string>(''),
      idPermisos: new FormControl<number[]>([]),
      idUsuarios: new FormControl<number[]>([])
    });
  }

  onCheckboxChange(e: any, permiso: IPermisoModel) {
    const permisos = this.formGrupo.get('idPermisos');
    if (e.checked) {
      permisos?.value.push(permiso.id)
    } else {
      const index = permisos?.value.findIndex((x: number) => x === permiso.id);
      permisos?.value.splice(index, 1);
    }
  }

  openDialog() {
    this.dialog.open(ModalDeleteComponent, {
      data: {
        id: this.grupoSeleccionado?.id
      }
    })
  }

  isChecked(permiso: IPermisoModel): boolean {
    const permisos = this.formGrupo.get('idPermisos');
    return permisos?.value?.some((x: number) => x === permiso.id);
  }

  toggleSeleccionar(grupo: IGrupoModel) {
    if (this.grupoSeleccionado && this.grupoSeleccionado.id === grupo.id) {
      this.limpiar();
    } else {
      this.grupoSeleccionado = grupo;
      this.formGrupo.reset({
        nombre: grupo.nombre,
        descripcion: grupo.descripcion,
        idPermisos: grupo.permisos.map(p => p.id),
        idUsuarios: Array.from(grupo.usuarios),
      });
    }
  }

  isSelectedUsuario(usuario: IUsuarioModel): boolean {
    const usuarios = this.formGrupo.get('idUsuarios');
    return usuarios?.value?.some((x: number) => x === usuario.id);
  }

  toggleSeleccionarUsuario(usuario: IUsuarioModel) {
    const usuarios = this.formGrupo.get('idUsuarios');
    if (!usuarios?.value.some((u: number) => u === usuario.id)) {
      usuarios?.value.push(usuario.id)
    } else {
      const index = usuarios?.value.findIndex((x: number) => x === usuario.id);
      usuarios?.value.splice(index, 1);
    }
  }

  hasError(field: string, type: string) {
    return this.formGrupo.get(field)?.hasError(type);
  }

  limpiar() {
    this.grupoSeleccionado = null;
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
      if (this.grupoSeleccionado) {
        this.updateGrupoUsecase.execute({
          id: this.grupoSeleccionado.id,
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
      } else {
        this.createGrupoUsecase.execute(this.formGrupo.value).subscribe({
          next: (res) => {
            if (res.status !== 201) {
              res.errors?.forEach((err) => {
                this.formGrupo.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
              })
              this.snackbarService.open({ 
                mensaje: res.message || 'Ha ocurrido un error al intentar crear el grupo, revise sus datos o consulte a su administrador',
                type: 'error'
              })
            } else {
              this.snackbarService.open({
                mensaje: res.message || 'Grupo generado exitosamente',
                type: 'success'
              })
            }
          },
          error: (err) => {
            console.log(err);
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error'
            })
          }
        })
      }
    }
  }
}
