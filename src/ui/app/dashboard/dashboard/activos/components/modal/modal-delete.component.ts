import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivosFormModule } from '../form/activos-form.module';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { IDataNodoHijo } from '../../services/activos-form.service';
import { IActivoNode } from '../../interfaces/activo-node';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';
import { DeleteActivosUsecase } from '@data/activos/usecases/delete-activos.usecase';
import { ActivosDataModule } from '@data/activos/activos.data.module';

interface DialogDeleteData {
  nodoSeleccionado: IActivoNode | undefined,
  dataNodoHijos: IDataNodoHijo[]
}

@Component({
  selector: 'activo-modal-Delete',
  standalone: true,
  imports: [
    ActivosFormModule,
    MaterialModule,
    ChipComponent,
    CommonModule,

    ActivosDataModule
  ],
  providers: [
    SnackbarService,
    DeleteActivosUsecase
  ],
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent {
  constructor(
    private deleteUsecase: DeleteActivosUsecase,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData
  ) { }

  onSubmit() {
    if (this.data.nodoSeleccionado) {
      this.deleteUsecase.execute(this.data.nodoSeleccionado.id)
      .subscribe({
        next: (res) => {
          if (res.status !== 200) {
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar eliminar este activo',
              type: 'error'
            })
          } else {
            this.snackbarService.open({ 
              mensaje: res.message || 'Activo eliminado',
              type: 'success'
            })
            this.onNoClick()
          }
        },
        error: (err) => {
          this.snackbarService.open({
            mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
            type: 'error',
          })  
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
