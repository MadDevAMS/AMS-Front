import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { IGrupoModel, IGrupoPermisoModel, IGrupoUsuarioModel } from '@data/grupos/models/grupo.model';

@Component({
  selector: 'gestion-modal-grupo-permisos',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './modal-grupo-permisos.component.html',
})
export class ModalGrupoPermisosComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalGrupoPermisosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { grupo: IGrupoModel, type: 'permisos' | 'usuarios' }
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  getArray() {
    return this.data.type === 'permisos' ? this.data.grupo.permisos : this.data.grupo.usuarios
  }

  getLabel(item: IGrupoUsuarioModel | IGrupoPermisoModel) {
    return this.data.type === 'permisos' ? 
    [(item as IGrupoPermisoModel).nombre, (item as IGrupoPermisoModel).descripcion] : 
    [(item as IGrupoUsuarioModel).nombres, (item as IGrupoUsuarioModel).apellidos, (item as IGrupoUsuarioModel).correo]
  }

  getLabelEmpty() {
    return this.data.type === 'permisos' ? 'Sin permisos encontrados' : 'Sin usuarios encontrados'
  }

}
