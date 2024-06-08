import { Observable, map } from 'rxjs';
import { GrupoMapper } from '../mappers/grupo.mapper';
import { IGrupoEntity } from '../entities/grupo.entity';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from '@base/response/response';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { API_URL } from '@base/environment';
import { responseMapper, responsePaginationMapper } from '@base/response/response.mapper';
import { IRequestPagination } from '@base/request/requestPagination';
import { IGrupoCreateModel } from '@data/grupos/models/grupo-create.model';
import { GrupoCreateMapper } from '../mappers/grupo-create.mapper';
import { GrupoRepository } from '@data/grupos/repository/grupo.repository';
import { IGrupoModel } from '@data/grupos/models/grupo.model';

export class GrupoImplementationRepository extends GrupoRepository {

  mapper = new GrupoMapper();
  mapperCreate = new GrupoCreateMapper();

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  override updateGrupo(params: IGrupoCreateModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/groups`, this.mapperCreate.mapTo(params))
  }

  override createGrupo(params: IGrupoCreateModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/groups`, this.mapperCreate.mapTo(params))
  }

  override deleteGrupo(id: number): Observable<IApiResponse<void>> {
    return this.http.delete<IApiResponse<void>>(`${API_URL}/groups?id=${id}`)
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