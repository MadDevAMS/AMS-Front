import { Observable } from 'rxjs';
import { IUsuarioModel } from '../models/usuario.model';
import { IApiResponse } from '@base/response/response';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IRequestPagination } from '@base/request/requestPagination';
import { IUsuarioCreateModel } from '../models/usuario-create.model';

export abstract class UsuarioRepository {
  abstract updateUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>>;
  abstract createUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>>;
  abstract deleteUsuario(id: number): Observable<IApiResponse<void>>;
  abstract getUsuarioById(id: number): Observable<IApiResponse<IUsuarioModel>>;
  abstract getAllUsuarios(params: IRequestPagination): Observable<IApiResponsePagination<IUsuarioModel>>;
}