import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IMaquinaModel } from '@data/maquina/models/maquina.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activos-maquina-card',
  templateUrl: './maquina-card.component.html',
})
export class MaquinaCardComponent { 
  constructor(
    public serviceForm: ActivosFormService<IMaquinaModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      tipoMaquina: new FormControl(this.serviceForm.dataNodo?.tipoMaquina, [Validators.required]),
    })
  }
}
