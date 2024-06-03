import { Component } from '@angular/core';
import { ActivosFormService } from '../../services/activos-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAreaModel } from '@data/area/models/area.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'activos-area-card',
  templateUrl: './area-card.component.html',
})
export class AreaCardComponent {
  constructor(
    public serviceForm: ActivosFormService<IAreaModel>,
    public dialog: MatDialog
  ) { 
    this.serviceForm.formDataUpdate = new FormGroup({
      nombre: new FormControl(this.serviceForm.dataNodo?.nombre, [Validators.required]),
      descripcion: new FormControl(this.serviceForm.dataNodo?.descripcion),
    })
  }
}
