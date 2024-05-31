import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IPuntoModel } from '@data/punto/models/punto.model';

@Component({
  selector: 'activos-punto-form',
  templateUrl: './punto-form.component.html',
})
export class PuntoFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IPuntoModel>
  ) { }
}
