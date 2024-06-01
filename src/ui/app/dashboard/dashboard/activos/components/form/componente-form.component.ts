import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IComponenteModel } from '@data/componente/models/componente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activos-componente-form',
  templateUrl: './componente-form.component.html',
})
export class ComponenteFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IComponenteModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      clase: new FormControl(this.serviceForm.dataNodo?.clase, [Validators.required]),
      potencia: new FormControl(this.serviceForm.dataNodo?.potencia, [Validators.required, Validators.min(0)]),
      velocidad: new FormControl(this.serviceForm.dataNodo?.velocidad, [Validators.required, Validators.min(0)])
    })
  }
}
