import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { PuntoRepository } from '../repository/punto.repository';
import { IPuntoModel } from '../models/punto.model';

@Injectable({
  providedIn: 'platform'
})
export class GetPuntoUsecase implements UseCase<string, IApiResponse<IPuntoModel>> {
  constructor(private puntoRepository: PuntoRepository) { }

  execute(id: string): Observable<IApiResponse<IPuntoModel>> {
    return this.puntoRepository.getPunto(id);
  }
}