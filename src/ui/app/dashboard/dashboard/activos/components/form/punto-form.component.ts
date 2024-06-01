import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IPuntoModel } from '@data/punto/models/punto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { direccionesMedida } from '@ui/shared/variables/direccionesMedida';
import { anguloDireccionMedida } from '@ui/shared/variables/anguloDireccionMedida';

@Component({
  selector: 'activos-punto-form',
  templateUrl: './punto-form.component.html',
})
export class PuntoFormComponent { 
  direccionesMedida = direccionesMedida
  anguloDireccionMedida = anguloDireccionMedida

  constructor(
    public serviceForm: ActivosFormService<IPuntoModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      angulo: new FormControl(this.serviceForm.dataNodo?.angulo, [Validators.required, Validators.min(0)]),
      direccion: new FormControl(this.serviceForm.dataNodo?.direccion, [Validators.required]),
    })
  }
}
