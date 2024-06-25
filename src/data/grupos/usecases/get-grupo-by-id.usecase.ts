import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';
import { IGrupoModel } from '../models/grupo.model';
import { GrupoRepository } from '../repository/grupo.repository';

@Injectable({
  providedIn: 'root'
})
export class GetGrupoByIdUsecase implements UseCase<number, IApiResponse<IGrupoModel>> {
  constructor(private grupoRepository: GrupoRepository) { }

  execute(id: number): Observable<IApiResponse<IGrupoModel>> {
    return this.grupoRepository.getGrupoById(id);
  }
}