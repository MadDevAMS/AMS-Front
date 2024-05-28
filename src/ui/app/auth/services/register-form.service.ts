import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterUsuarioEntidadUsecase } from "@data/register/usecases/register-usuario-entidad.usecase";
import { SnackbarService } from "@ui/shared/services/snackbar.service";

@Injectable({ providedIn: 'platform' })
export class RegisterFormService {
  formUser: FormGroup;
  formEntity: FormGroup;
  razonesSociales: string[] = [
    "SAC",
    "SA",
    "EIRL",
    "SAA",
    "SRL"
  ];

  constructor(
    private registerUsecase: RegisterUsuarioEntidadUsecase,
    private snackbarService: SnackbarService
  ) {
    this.formUser = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  
    this.formEntity = new FormGroup({
      ruc: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      nombre: new FormControl('', [Validators.required]),
      razonSocial: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  hasError(field: string, type: string) {
    return this.formUser.get(field)?.hasError(type);
  }

  hasErrorEntity(field: string, type: string) {
    return this.formEntity.get(field)?.hasError(type);
  }

  getErrorsApi(form: FormGroup, field: string) {
    return form.get(field)?.getError('errors')
  }

  register() {
    this.formEntity.markAllAsTouched()
    this.formUser.markAllAsTouched()
    if (this.formEntity.valid && this.formUser.valid) {
      this.registerUsecase.execute({
        ...this.formEntity.value,
        ...this.formUser.value
      }).subscribe({
        next: (res) => {
          if (res.status !== 201) {
            res.errors?.forEach((err) => {
              this.formEntity.get(err.propertyName)?.setErrors({ errors: err.propertyName })
              this.formUser.get(err.propertyName)?.setErrors({ errors: err.propertyName })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar registrarse, revise sus datos',
              type: 'error'
            })
          } else {
            this.snackbarService.open({ 
              mensaje: 'Registro exitoso',
              type: 'success'
            })
          }
        },
        error: (err) => {
          this.snackbarService.open({ 
            mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
            type: 'error'
          })
        }
      })
    }
  }
}