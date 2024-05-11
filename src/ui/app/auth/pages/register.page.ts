import { Component } from '@angular/core';
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

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: 'register.page.html',
})
export class RegisterPage {
  hide = true;

  page = 1;

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
    this.page = 1;
  }

  register() {
    if (this.page === 1 && !this.formUser.invalid) {
      this.page = 2;
    } else if (this.page === 2 && !this.formEntity.invalid) {
      console.log("Usuario y entidad registrados");
      console.log(this.formUser.value);
      console.log(this.formEntity.value);
    }
  }
}
