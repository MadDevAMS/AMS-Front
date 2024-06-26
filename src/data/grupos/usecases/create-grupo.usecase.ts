import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';
import { IGrupoCreateModel } from '../models/grupo-create.model';
import { GrupoRepository } from '../repository/grupo.repository';

@Injectable({
  providedIn: 'root'
})
export class CreateGrupoUsecase implements UseCase<IGrupoCreateModel, IApiResponse<void>> {
  constructor(private grupoRepository: GrupoRepository) { }

  execute(params: IGrupoCreateModel): Observable<IApiResponse<void>> {
    return this.grupoRepository.createGrupo(params);
  }
}