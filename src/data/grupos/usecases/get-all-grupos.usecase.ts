import { Injectable } from '@angular/core';
import { GrupoRepository } from '../repository/grupo.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IGrupoModel } from '../models/grupo.model';
import { IRequestPagination } from '@base/request/requestPagination';
import { IApiResponsePagination } from '@base/response/responsePagination';

@Injectable({
  providedIn: 'root'
})
export class GetAllGruposUsecase implements UseCase<IRequestPagination, IApiResponsePagination<IGrupoModel>> {
  constructor(private gruposRepository: GrupoRepository) { }

  execute(params: IRequestPagination): Observable<IApiResponsePagination<IGrupoModel>> {
    return this.gruposRepository.getAllGrupos(params);
  }
}