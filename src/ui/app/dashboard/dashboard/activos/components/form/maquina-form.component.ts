import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IMaquinaModel } from '@data/maquina/models/maquina.model';

@Component({
  selector: 'activos-maquina-form',
  templateUrl: './maquina-form.component.html',
})
export class MaquinaFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IMaquinaModel>
  ) { }
}
