import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IGrupoModel } from "@data/grupos/models/grupo.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";
import { CreateUsuarioUsecase } from "@data/usuarios/usecases/create-usuario.usecase";
import { UpdateUsuarioUsecase } from "@data/usuarios/usecases/update-usuario.usecase";
import { SnackbarService } from "@ui/shared/services/snackbar.service";

@Injectable({ 
  providedIn: 'platform' 
})
export class UsuarioFormService {
  hidePassword: boolean = true;
  updatePassword: boolean = true;
  usuarioSeleccionado: IUsuarioModel | null = null;
  formUsuario: FormGroup;

  constructor(
    private updateUsuarioUsecase: UpdateUsuarioUsecase,
    private createUsuarioUsecase: CreateUsuarioUsecase,
    private snackbarService: SnackbarService
  ) {
    this.formUsuario = new FormGroup({
      nombres: new FormControl<string>('', [Validators.required]),
      apellidos: new FormControl<string>('', [Validators.required]),
      correo: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>(''),
      confirmPassword: new FormControl<string>(''),
      grupos: new FormControl<number[]>([]),
    });
    this.setValidators();
  }

  private setValidators() {
    const correoControl = this.formUsuario.get('correo');
    const passwordControl = this.formUsuario.get('password');
    const confirmPasswordControl = this.formUsuario.get('confirmPassword');

    if (this.usuarioSeleccionado) {
      correoControl?.disable()
      if (this.updatePassword) {
        passwordControl?.setValidators([Validators.required]);
        confirmPasswordControl?.setValidators([Validators.required]);
        passwordControl?.enable()
        confirmPasswordControl?.enable()
      } else {
        passwordControl?.clearValidators();
        confirmPasswordControl?.clearValidators();
        passwordControl?.disable()
        confirmPasswordControl?.disable()
      }
    } else {
      passwordControl?.setValidators([Validators.required]);
      confirmPasswordControl?.setValidators([Validators.required]);
      correoControl?.enable()
      passwordControl?.enable()
      confirmPasswordControl?.enable()
    }

    passwordControl?.updateValueAndValidity();
    confirmPasswordControl?.updateValueAndValidity();
  }

  isDisabled(field: string): boolean {
    return this.formUsuario.get(field)?.disabled ?? false;
  }

  onCheckboxChange(e: any, grupo: IGrupoModel) {
    const grupos = this.formUsuario.get('grupos');
    if (e.checked) {
      grupos?.value.push(grupo.id)
    } else {
      const index = grupos?.value.findIndex((x: number) => x === grupo.id);
      grupos?.value.splice(index, 1);
    }
  }

  isChecked(grupo: IGrupoModel): boolean {
    const grupos = this.formUsuario.get('grupos');
    return grupos?.value?.some((x: number) => x === grupo.id);
  }

  toggleSeleccionar(usuario: IUsuarioModel) {
    if (this.usuarioSeleccionado && this.usuarioSeleccionado === usuario) {
      this.onUpdatePasswordChange(true);
      this.limpiar();
    } else {
      this.onUpdatePasswordChange(false);
      this.usuarioSeleccionado = usuario;
      this.formUsuario.reset({
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        correo: usuario.correo,
        password: '',
        confirmPassword: '',
        grupos: usuario.grupos.map(g => g.id)
      });
      this.setValidators();
    }
  }

  onUpdatePasswordChange(updatePassword: boolean) {
    this.updatePassword = updatePassword;
    this.setValidators();
  }

  hasError(field: string, type: string) {
    return this.formUsuario.get(field)?.hasError(type);
  }

  getErrorsApi(field: string) {
    return this.formUsuario.get(field)?.getError('errors')
  }

  limpiar() {
    this.usuarioSeleccionado = null;
    this.formUsuario.reset({
      nombres: '',
      apellidos: '',
      correo: '',
      password: '',
      confirmPassword: '',
      grupos: []
    });
    this.setValidators();
  }

  submit() {
    this.formUsuario.markAllAsTouched();
    if (this.formUsuario.valid) {
      if (this.usuarioSeleccionado) {
        this.updateUsuarioUsecase.execute({
          ...this.formUsuario.value,
          id: this.usuarioSeleccionado.id,
          updatePassword: this.updatePassword
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
          },
          error: (err) => {
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error'
            })
          }
        })
      } else {
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
