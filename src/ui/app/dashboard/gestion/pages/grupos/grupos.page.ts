import { Component } from '@angular/core';
import { CardLayout } from '../../../../shared/layouts/card.layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'grupos-page',
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
  templateUrl: './grupos.page.html',
})
export class GruposPage {
  formGrupo!: FormGroup

  constructor() {
    this.formGrupo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    })
  }
}
