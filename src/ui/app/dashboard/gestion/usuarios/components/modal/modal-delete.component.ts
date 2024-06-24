import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { CommonModule } from '@angular/common';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { DeleteUsuarioUsecase } from '@data/usuarios/usecases/delete-usuario.usecase';
import { UsuarioConfigService } from '../../services/usuario-config.service';

@Component({
  selector: 'activo-modal-Delete',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,

    UsuarioDataModule
  ],
  providers: [
    SnackbarService,
    DeleteUsuarioUsecase
  ],
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent {
  loading = false

  constructor(
    private deleteUsecase: DeleteUsuarioUsecase,
    private usuarioConfig: UsuarioConfigService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }

  onSubmit() {
    this.loading = true
    this.deleteUsecase.execute(this.data.id).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({
            mensaje: res.message || 'Ha ocurrido un error al intentar eliminar este usuario',
            type: 'error'
          })
        } else {
          this.snackbarService.open({
            mensaje: res.message || 'Usuario eliminado',
            type: 'success'
          })
          this.dialogRef.close(true)
          this.usuarioConfig.closeDrawer()
        }
        this.loading = false
      },
      error: (err) => {
        this.snackbarService.open({
          mensaje: err.message,
          type: 'error',
        })
        this.loading = false
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
