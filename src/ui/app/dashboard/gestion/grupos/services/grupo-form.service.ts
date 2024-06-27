import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CreateGrupoUsecase } from "@data/grupos/usecases/create-grupo.usecase";
import { IPermisoModel } from "@data/permisos/models/permiso.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";
import { SnackbarService } from "@ui/shared/services/snackbar.service";
import { MatDialog } from "@angular/material/dialog";
import { GrupoFormAbstract } from "./grupo-form-abstract";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GrupoFormService extends GrupoFormAbstract {
  usuariosSeleccionados: IUsuarioModel[] = [];
  permisosSeleccionados: IPermisoModel[] = [];

  formGrupo: FormGroup;
  loading = false

  constructor(
    private createGrupoUsecase: CreateGrupoUsecase,
    private dialog: MatDialog,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
    super()
    this.formGrupo = new FormGroup({
      nombre: new FormControl<string>('', [Validators.required]),
      descripcion: new FormControl<string>('', [Validators.required]),
      idPermisos: new FormControl<number[]>([]),
      idUsuarios: new FormControl<number[]>([])
    });
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

  getErrors(field: string) {
    return this.formGrupo.get(field)?.getError('errors')
  }

  limpiar() {
    this.formGrupo.reset({
      nombre: '',
      descripcion: '',
      idPermisos: [],
      idUsuarios: []
    });
    this.permisosSeleccionados = []
    this.usuariosSeleccionados = []
  }

  submit() {
    this.formGrupo.markAllAsTouched();
    if (this.formGrupo.valid) {
      this.loading = true
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
            this.router.navigate(['/dashboard/gestion/grupos'])
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
