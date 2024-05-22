import { Component } from '@angular/core';
import { CardLayout } from '../../../../shared/layouts/card.layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'usuarios-page',
  standalone: true,
  imports: [
    CardLayout,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './usuarios.page.html',
})
export class UsuariosPage {
  formUser!: FormGroup

  constructor() {
    this.formUser = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  hide = true;


  hasError(field: string, type: string) {
    return this.formUser.get(field)?.hasError(type);
  }
  register() {
  }
}
