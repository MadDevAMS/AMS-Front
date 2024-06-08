import { Observable, map } from 'rxjs';
import { GrupoMapper } from './grupo.mapper';
import { IGrupoEntity } from './grupo.entity';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { IGrupoModel } from '../../data/grupos/models/grupo.model';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from '@base/response/response';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { API_URL } from '@base/environment';
import { responseMapper, responsePaginationMapper } from '@base/response/response.mapper';
import { IRequestPagination } from '@base/request/requestPagination';

export class GrupoImplementationRepository extends GrupoRepository {

  mapper = new GrupoMapper();

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  override getGrupoById(id: number): Observable<IApiResponse<IGrupoModel>> {
    return this.http.get<IApiResponse<IGrupoEntity>>(`${API_URL}/group?idGroup=${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override getAllGrupos(params: IRequestPagination): Observable<IApiResponsePagination<IGrupoModel>> {
    return this.http.get<IApiResponsePagination<IGrupoEntity>>(`${API_URL}/groups`, {
      params: {
        ...params
      }
    })
      .pipe(map(responsePaginationMapper(this.mapper)))
  }

}