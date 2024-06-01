import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'activo-modal-entidad',
  templateUrl: './modal-entidad.component.html',
})
export class ModalEntidadComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalEntidadComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }
}
