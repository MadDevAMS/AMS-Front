import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IEntidadModel } from '@data/entidad/models/entidad.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { razonesSociales } from '@ui/shared/variables/razonesSociales';

@Component({
  selector: 'activos-entidad-card',
  templateUrl: './entidad-card.component.html',
})
export class EntidadCardComponent {
  razonesSociales = razonesSociales
  
  constructor(
    public serviceForm: ActivosFormService<IEntidadModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      razonSocial: new FormControl(this.serviceForm.dataNodo?.razonSocial, [Validators.required]),
      ruc: new FormControl(this.serviceForm.dataNodo?.ruc, [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      telefono: new FormControl(this.serviceForm.dataNodo?.telefono, [Validators.required]),
      email: new FormControl(this.serviceForm.dataNodo?.email, [Validators.required, Validators.email])
    })
  }
}
