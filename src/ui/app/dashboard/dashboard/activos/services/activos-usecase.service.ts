import { Injectable } from '@angular/core';
import { IActivoModel } from '@data/activos/models/activo.model';
import { GetActivosUsecase } from '@data/activos/usecases/get-activos.usecase';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

@Injectable({
  providedIn: 'platform'
})
export class ActivosUsecaseService {
  activos!: IActivoModel

  constructor(
    private activosUsecase: GetActivosUsecase,
    private snackbarService: SnackbarService
  ) { 
    this.activosUsecase.execute().subscribe({
      next: (res) => {
        this.activos = res.data as IActivoModel
      },
      error: (err) => {
        this.snackbarService.open({
          mensaje: err.message,
          type: 'error',
        })
      }
    })
  }
}