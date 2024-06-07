import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginUsecase } from "@data/login/usecases/login.usecase";
import { SnackbarService } from "@ui/shared/services/snackbar.service";

@Injectable({ providedIn: 'platform' })
export class LoginFormService {

  formUser: FormGroup
  isSending = false;

  constructor(
    public loginUsecase: LoginUsecase,
    private snackbarService: SnackbarService,
    private route: Router
  ) { 
    this.formUser = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(false),
    });
  }

  hasError(field: string, type: string) {
    return this.formUser.get(field)?.hasError(type);
  }

  getErrorsApi(field: string) {
    return this.formUser.get(field)?.getError('errors')
  }

  login() {
    if (this.formUser.valid) {
      this.isSending = true
      this.loginUsecase.execute(this.formUser.value).subscribe({
        next: (res) => {
          if (res.status !== 200) {
            res.errors?.forEach((err) => {
              this.formUser.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar iniciar sesión, revise sus credenciales',
              type: 'error'
            })
          } else {
            this.snackbarService.open({ 
              mensaje: 'Inicio de sesión exitoso',
              type: 'success'
            })
            if (res.data) {
              localStorage.setItem('token', res.data!);
              this.route.navigate(['/dashboard'])
            }
          }
          this.isSending = false
        },
        error: (err) => {
          this.snackbarService.open({ 
            mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
            type: 'error'
          })
          this.isSending = false
        }
      })
    }
  }
}