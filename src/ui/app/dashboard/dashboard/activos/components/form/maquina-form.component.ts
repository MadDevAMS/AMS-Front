import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IMaquinaModel } from '@data/maquina/models/maquina.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activos-maquina-form',
  templateUrl: './maquina-form.component.html',
})
export class MaquinaFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IMaquinaModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      tipoMaquina: new FormControl(this.serviceForm.dataNodo?.tipoMaquina, [Validators.required]),
      fundacion: new FormControl(this.serviceForm.dataNodo?.fundacion, [Validators.required]),
    })
  }
}
