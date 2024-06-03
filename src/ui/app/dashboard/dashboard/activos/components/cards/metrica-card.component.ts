import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMetricaModel } from '@data/metrica/models/metrica.model';

@Component({
  selector: 'activos-metrica-card',
  templateUrl: './metrica-card.component.html',
})
export class MetricaCardComponent { 
  constructor(
    public serviceForm: ActivosFormService<IMetricaModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      tipoMetrica: new FormControl(this.serviceForm.dataNodo?.tipoMetrica, [Validators.required]),
    })
  }
}
