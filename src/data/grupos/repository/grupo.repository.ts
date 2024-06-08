import { Observable } from 'rxjs';
import { IGrupoModel } from '../models/grupo.model';
import { IApiResponse } from '@base/response/response';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IRequestPagination } from '@base/request/requestPagination';

export abstract class GrupoRepository {
  abstract getGrupoById(id: number): Observable<IApiResponse<IGrupoModel>>;
  abstract getAllGrupos(params: IRequestPagination): Observable<IApiResponsePagination<IGrupoModel>>;
}