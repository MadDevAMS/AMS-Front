import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthLayout } from '../layouts/auth.layout';
import { FormLayout } from '../layouts/form.layout';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperLayout } from '../../shared/layouts/stepper.layout';
import { MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,

    CdkStepperModule,
    StepperLayout,
    
    AuthLayout,
    FormLayout
  ],
  templateUrl: 'register.page.html',
})
export class RegisterPage {
  @ViewChild('stepper') stepper!: MatStepper;

  hide = true;

  formUser = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  formEntity = new FormGroup({
    ruc: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    razonSocial: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });


  hasError(field: string, type: string) {
    return this.formUser.get(field)?.hasError(type);
  }

  hasErrorEntity(field: string, type: string) {
    return this.formEntity.get(field)?.hasError(type);
  }

  volver() {
    this.stepper.previous()
  }

  register() {
    if (this.stepper.selectedIndex < this.stepper.steps.length && !this.formUser.invalid) {
      this.stepper.next()
    } else if (this.stepper.selectedIndex === this.stepper.steps.length - 1 && !this.formEntity.invalid) {
      console.log("Usuario y entidad registrados");
      console.log(this.formUser.value);
      console.log(this.formEntity.value);
    }
  }
}
