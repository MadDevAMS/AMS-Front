import { Observable } from 'rxjs';
import { IPermisoModel } from '../models/permiso.model';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IRequestPagination } from '@base/request/requestPagination';

export abstract class PermisoRepository {
  abstract getAllPermisos(params: IRequestPagination): Observable<IApiResponsePagination<IPermisoModel>>;
}