import { PermisoMapper } from './permiso.mapper';
import { IPermisoEntity } from './permiso.entity';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';
import { HttpClient } from '@angular/common/http';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { API_URL } from '@base/environment';
import { IRequestPagination } from '@base/request/requestPagination';
import { responsePaginationMapper } from '@base/response/response.mapper';
import { map } from 'rxjs';

export class PermisoImplementationRepository extends PermisoRepository {

  mapper = new PermisoMapper();

  constructor(private http: HttpClient) {
    super()
  }

  override getAllPermisos(params: IRequestPagination) {
    return this.http.get<IApiResponsePagination<IPermisoEntity>>(`${API_URL}/permissions`, {
      params: {
        ...params
      }
    }).pipe(map(responsePaginationMapper(this.mapper)))
  }
  
}