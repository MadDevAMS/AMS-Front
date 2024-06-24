import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { IEntidadModel } from '../models/entidad.model';
import { EntidadRepository } from '../repository/entidad.repository';

@Injectable({
  providedIn: 'platform'
})
export class GetEntidadUsecase implements UseCase<void, IApiResponse<IEntidadModel>> {
  constructor(private entidadRepository: EntidadRepository) { }

  execute(): Observable<IApiResponse<IEntidadModel>> {
    return this.entidadRepository.getEntidad();
  }
}