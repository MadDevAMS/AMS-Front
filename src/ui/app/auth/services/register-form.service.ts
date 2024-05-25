import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterUsuarioEntidadUsecase } from "@data/register/usecases/register-usuario-entidad.usecase";

@Injectable({ providedIn: 'platform' })
export class RegisterFormService {
  formUser: FormGroup;
  formEntity: FormGroup;

  constructor(
    private registerUsecase: RegisterUsuarioEntidadUsecase
  ) {
    this.formUser = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  
    this.formEntity = new FormGroup({
      ruc: new FormControl('', [Validators.required]),
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

  register() {
    this.formEntity.markAllAsTouched()
    this.formUser.markAllAsTouched()
    if (this.formEntity.valid) {
      this.registerUsecase.execute({
        ...this.formEntity.value,
        ...this.formUser.value
      })
    }
  }
}