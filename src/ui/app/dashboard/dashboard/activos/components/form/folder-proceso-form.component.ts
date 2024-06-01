import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFolderProcesoModel } from '@data/folder/folder-proceso/models/folder-proceso.model';

@Component({
  selector: 'activos-folder-proceso-form',
  templateUrl: './folder-proceso-form.component.html',
})
export class FolderProcesoFormComponent { 
  constructor(
    public serviceForm: ActivosFormService<IFolderProcesoModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
      desempeño: new FormControl(this.serviceForm.dataNodo?.desempeño, [Validators.required]),
      estado: new FormControl(this.serviceForm.dataNodo?.estado, [Validators.required]),
      frecuencia: new FormControl(this.serviceForm.dataNodo?.frecuencia, [Validators.required, Validators.min(0)]),
      prioridad: new FormControl(this.serviceForm.dataNodo?.prioridad, [Validators.required]),
    })
  }
}
