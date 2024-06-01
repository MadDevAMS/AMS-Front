import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { IFolderAmbienteModel } from '@data/folder/folder-ambiente/models/folder-ambiente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activos-folder-ambiente-form',
  templateUrl: './folder-ambiente-form.component.html',
})
export class FolderAmbienteFormComponent {
  constructor(
    public serviceForm: ActivosFormService<IFolderAmbienteModel>
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      responsable: new FormControl(this.serviceForm.dataNodo?.responsable, [Validators.required]),
      sector: new FormControl(this.serviceForm.dataNodo?.sector, [Validators.required]),
      tipo: new FormControl(this.serviceForm.dataNodo?.tipo, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
    })
  }
}
