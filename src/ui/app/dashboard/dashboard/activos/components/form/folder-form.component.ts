import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IEntidadModel } from '@data/entidad/models/entidad.model';

@Component({
  selector: 'activos-folder-form',
  templateUrl: './folder-form.component.html',
})
export class FolderFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IEntidadModel>
  ) { }
}
