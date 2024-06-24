import { Injectable } from '@angular/core';
import { IActivoModel } from '@data/activos/models/activo.model';
import { GetActivosUsecase } from '@data/activos/usecases/get-activos.usecase';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class ActivosUsecaseService {
  private activosSubject = new BehaviorSubject<IActivoModel>({} as IActivoModel);
  activos$: Observable<IActivoModel> = this.activosSubject.asObservable();
  hasAlready = false

  constructor(
    private activosUsecase: GetActivosUsecase,
    private snackbarService: SnackbarService
  ) { }

  loadData() {
    this.hasAlready = false
    this.activosUsecase.execute().subscribe({
      next: (res) => {
        this.activosSubject.next(res.data as IActivoModel)
        this.hasAlready = true
      },
      error: (err) => {
        this.snackbarService.open({
          mensaje: err.message,
          type: 'error',
        })
        this.hasAlready = true
      }
    })
  }
}