import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IEntidadModel } from '@data/entidad/models/entidad.model';

@Component({
  selector: 'activos-entidad-form',
  templateUrl: './entidad-form.component.html',
})
export class EntidadFormComponent {
  constructor(
    public serviceForm: ActivosFormService<IEntidadModel>
  ) { }
}
