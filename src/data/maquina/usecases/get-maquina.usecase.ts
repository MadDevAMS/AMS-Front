import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { MaquinaRepository } from '../repository/maquina.repository';
import { IMaquinaModel } from '../models/maquina.model';

@Injectable({
  providedIn: 'platform'
})
export class GetMaquinaUsecase implements UseCase<number, IApiResponse<IMaquinaModel>> {
  constructor(private maquinaRepository: MaquinaRepository) { }

  execute(id: number): Observable<IApiResponse<IMaquinaModel>> {
    return this.maquinaRepository.getMaquina(id);
  }
}