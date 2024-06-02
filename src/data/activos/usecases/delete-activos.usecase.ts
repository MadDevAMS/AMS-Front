import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { ActivoRepository } from '../repository/activos.repository';
import { IApiResponse } from '@base/response';

@Injectable({
  providedIn: 'platform'
})
export class DeleteActivosUsecase implements UseCase<string, IApiResponse<void>> {
  constructor(private activosRepository: ActivoRepository) { }

  execute(id: string): Observable<IApiResponse<void>> {
    return this.activosRepository.deleteActivos(id);
  }
}