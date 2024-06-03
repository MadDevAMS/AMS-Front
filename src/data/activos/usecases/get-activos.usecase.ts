import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IActivoModel } from '../models/activo.model';
import { ActivoRepository } from '../repository/activos.repository';
import { IApiResponse } from '@base/response';

@Injectable({
  providedIn: 'platform'
})
export class GetActivosUsecase implements UseCase<void, IApiResponse<IActivoModel>> {
  constructor(private activosRepository: ActivoRepository) { }

  execute(): Observable<IApiResponse<IActivoModel>> {
    return this.activosRepository.getActivos();
  }
}