import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IComponenteModel } from '@data/componente/models/componente.model';

@Component({
  selector: 'activos-componente-form',
  templateUrl: './componente-form.component.html',
})
export class ComponenteFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IComponenteModel>
  ) { }
}
