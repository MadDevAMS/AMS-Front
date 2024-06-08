import { Observable } from 'rxjs';
import { IGrupoModel } from '../models/grupo.model';
import { IApiResponse } from '@base/response/response';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IRequestPagination } from '@base/request/requestPagination';
import { IGrupoCreateModel } from '../models/grupo-create.model';

export abstract class GrupoRepository {
  abstract updateGrupo(params: IGrupoCreateModel): Observable<IApiResponse<void>>;
  abstract createGrupo(params: IGrupoCreateModel): Observable<IApiResponse<void>>;
  abstract deleteGrupo(id: number): Observable<IApiResponse<void>>;
  abstract getGrupoById(id: number): Observable<IApiResponse<IGrupoModel>>;
  abstract getAllGrupos(params: IRequestPagination): Observable<IApiResponsePagination<IGrupoModel>>;
}