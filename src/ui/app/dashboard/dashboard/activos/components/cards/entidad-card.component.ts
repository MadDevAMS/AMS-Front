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
      nombre: new FormControl({ value: this.serviceForm.dataNodo?.nombre, disabled: true }, [Validators.required]),
      razonSocial: new FormControl({ value: this.serviceForm.dataNodo?.razonSocial, disabled: true }, [Validators.required]),
      ruc: new FormControl({ value: this.serviceForm.dataNodo?.ruc, disabled: true }, [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
      imagen: new FormControl(this.serviceForm.dataNodo?.imagen || '-'),
      direccion: new FormControl(this.serviceForm.dataNodo?.direccion),
      telefono: new FormControl(this.serviceForm.dataNodo?.telefono, [Validators.required]),
      email: new FormControl(this.serviceForm.dataNodo?.email, [Validators.required, Validators.email])
    });
  }
}
