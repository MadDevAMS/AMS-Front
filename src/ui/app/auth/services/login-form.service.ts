import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginUsecase } from "@data/login/usecases/login.usecase";

@Injectable({ providedIn: 'platform' })
export class LoginFormService {

  formUser: FormGroup

  constructor(
    public loginUsecase: LoginUsecase
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
      this.loginUsecase.execute(this.formUser.value).subscribe({
        next: (res) => {
          if (res.Status !== 201) {
            res.Errors.forEach((err) => {
              this.formUser.get(err.PropertyName)?.setErrors({ errors: err.PropertyName })
            })
          } else {
            console.log(res);
          }
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }
}