import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IGrupoModel } from "@data/grupos/models/grupo.model";
import { CreateUsuarioUsecase } from "@data/usuarios/usecases/create-usuario.usecase";
import { SnackbarService } from "@ui/shared/services/snackbar.service";
import { UsuarioFormAbstract } from "./usuario-form-abstract";
import { MatDialog } from "@angular/material/dialog";
import { ModalGrupoPermisosComponent } from "../components/modal/modal-grupo-permisos.component";

@Injectable({ 
  providedIn: 'root' 
})
export class UsuarioFormService extends UsuarioFormAbstract {
  hidePassword: boolean = true;
  gruposSeleccionados: IGrupoModel[] = []
  formUsuario: FormGroup;
  loading = false

  constructor(
    private createUsuarioUsecase: CreateUsuarioUsecase,
    private router: Router,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) {
    super()
    this.formUsuario = new FormGroup({
      nombres: new FormControl<string>('', [Validators.required]),
      apellidos: new FormControl<string>('', [Validators.required]),
      correo: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
      grupos: new FormControl<number[]>([]),
    });
  }

  isDisabled(field: string): boolean {
    return this.formUsuario.get(field)?.disabled ?? false;
  }

  override onCheckboxChange(grupo: IGrupoModel) {
    const grupos = this.formUsuario.get('grupos');
    if (!this.isChecked(grupo)) {
      grupos?.value.push(grupo.id)
      this.gruposSeleccionados.push(grupo)
    } else {
      const index = grupos?.value.findIndex((x: number) => x === grupo.id);
      grupos?.value.splice(index, 1);
      this.gruposSeleccionados = this.gruposSeleccionados.filter(g => g.id !== grupo.id)
    }
  }

  override isChecked(grupo: IGrupoModel): boolean {
    const grupos = this.formUsuario.get('grupos');
    return grupos?.value?.some((x: number) => x === grupo.id);
  }

  override showInfoModalGroup(grupo: IGrupoModel, type: 'usuarios' | 'permisos'): void {
    this.dialog.open(ModalGrupoPermisosComponent, {
      data: {
        grupo,
        type
      }
    })
  }
  
  hasError(field: string, type: string) {
    return this.formUsuario.get(field)?.hasError(type);
  }

  getErrorsApi(field: string) {
    return this.formUsuario.get(field)?.getError('errors')
  }

  limpiar() {
    this.formUsuario.reset({
      nombres: '',
      apellidos: '',
      correo: '',
      password: '',
      confirmPassword: '',
      grupos: []
    });
    this.gruposSeleccionados = []
  }

  submit() {
    this.formUsuario.markAllAsTouched();
    if (this.formUsuario.valid) {
      this.loading = true
      this.createUsuarioUsecase.execute(this.formUsuario.value).subscribe({
        next: (res) => {
          if (res.status !== 201) {
            res.errors?.forEach((err) => {
              this.formUsuario.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar crear el usuario, revise sus datos o consulte a su administrador',
              type: 'error'
            })
          } else {
            this.snackbarService.open({
              mensaje: res.message || 'Usuario generado exitosamente',
              type: 'success'
            })
            this.router.navigate(['/dashboard/gestion/usuarios'])
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
