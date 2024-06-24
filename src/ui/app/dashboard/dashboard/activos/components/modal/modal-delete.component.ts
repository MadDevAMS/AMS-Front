import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivosFormModule } from '../form/activos-form.module';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { IDataNodoHijo } from '../../services/activos-form.service';
import { IActivoNode } from '../../interfaces/activo-node';
import { CommonModule } from '@angular/common';
import { ActivosDataModule } from '@data/activos/activos.data.module';
import { DeleteAreaUsecase } from '@data/area/usecases/delete-area.usecase';
import { DeleteMetricaUsecase } from '@data/metrica/usecases/delete-metrica.usecase';
import { DeleteComponenteUsecase } from '@data/componente/usecases/delete-componente.usecase';
import { DeleteMaquinaUsecase } from '@data/maquina/usecases/delete-maquina.usecase';
import { DeletePuntoUsecase } from '@data/punto/usecases/delete-punto.usecase';
import { IActivoModel } from '@data/activos/models/activo.model';
import { IApiResponse } from '@base/response/response';
import { AreaDataModule } from '@data/area/area.data.module';
import { MaquinaDataModule } from '@data/maquina/maquina.data.module';
import { ComponenteDataModule } from '@data/componente/componente.data.module';
import { PuntoDataModule } from '@data/punto/punto.data.module';
import { MetricaDataModule } from '@data/metrica/metrica.data.module';
import { SharedModule } from '../../../shared/shared.module';

interface DialogDeleteData {
  nodoSeleccionado: IActivoNode | undefined,
  dataNodoHijos: IDataNodoHijo[]
}

@Component({
  selector: 'activo-modal-Delete',
  standalone: true,
  imports: [
    SharedModule,
    ActivosFormModule,
    ActivosDataModule,
    AreaDataModule,
    MaquinaDataModule,
    ComponenteDataModule,
    PuntoDataModule,
    MetricaDataModule
  ],
  providers: [
    SnackbarService,
    DeleteAreaUsecase,
    DeleteMaquinaUsecase,
    DeleteComponenteUsecase,
    DeletePuntoUsecase,
    DeleteMetricaUsecase,
  ],
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent {
  DELETE_SERVICES: Record<IActivoModel["type"], any> = {
    entidad: null,
    area: this.deleteAreaUsecase,
    maquina: this.deleteMaquinaUsecase,
    componente: this.deleteComponenteUsecase,
    punto_monitoreo: this.deletePuntoUsecase,
    metrica: this.deleteMetricaUsecase
  }

  constructor(
    private deleteAreaUsecase: DeleteAreaUsecase,
    private deleteMaquinaUsecase: DeleteMaquinaUsecase,
    private deleteComponenteUsecase: DeleteComponenteUsecase,
    private deletePuntoUsecase: DeletePuntoUsecase,
    private deleteMetricaUsecase: DeleteMetricaUsecase,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData
  ) { }

  onSubmit() {
    if (this.data.nodoSeleccionado) {
      this.DELETE_SERVICES[this.data.nodoSeleccionado.type].execute(this.data.nodoSeleccionado.id)
      .subscribe({
        next: (res: IApiResponse<void>) => {
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
        error: (err: any) => {
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
