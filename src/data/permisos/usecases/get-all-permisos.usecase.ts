import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { IPermisoModel } from '../models/permiso.model';
import { PermisoRepository } from '../repository/permiso.repository';
import { IRequestPagination } from '@base/request/requestPagination';
import { IApiResponsePagination } from '@base/response/responsePagination';

@Injectable({
  providedIn: 'platform'
})
export class GetAllPermisosUsecase implements UseCase<IRequestPagination, IApiResponsePagination<IPermisoModel>> {
  constructor(private permisosRepository: PermisoRepository) { }

  execute(params: IRequestPagination): Observable<IApiResponsePagination<IPermisoModel>> {
    return this.permisosRepository.getAllPermisos(params);
  }
}