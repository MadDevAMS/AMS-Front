import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IComponenteModel } from '@data/componente/models/componente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activos-componente-card',
  templateUrl: './componente-card.component.html',
})
export class ComponenteCardComponent { 
  constructor(
    public serviceForm: ActivosFormService<IComponenteModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      potencia: new FormControl(this.serviceForm.dataNodo?.potencia, [Validators.required, Validators.min(0)]),
      velocidad: new FormControl(this.serviceForm.dataNodo?.velocidad, [Validators.required, Validators.min(0)])
    })
  }
}
