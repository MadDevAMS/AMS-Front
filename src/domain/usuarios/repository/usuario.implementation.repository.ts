import { Observable, map } from 'rxjs';
import { UsuarioMapper } from '../mappers/usuario.mapper';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { IApiResponse } from '@base/response/response';
import { responseMapper, responsePaginationMapper } from '@base/response/response.mapper';
import { IUsuarioEntity } from '../entities/usuario.entity';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IUsuarioPaginateRequest } from '../request/usuarioPaginate.request';
import { IUsuarioCreateModel } from '@data/usuarios/models/usuario-create.model';
import { UsuarioCreateMapper } from '../mappers/usuario-create.mapper';
import { UsuarioRepository } from '@data/usuarios/repository/usuario.repository';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { IUsuarioAuthEntity } from '../entities/usuario-auth.entity';
import { UsuarioAuthMapper } from '../mappers/usuario-auth.mapper';
import { IUsuarioAuthModel } from '@data/usuarios/models/usuario-auth.model';

export class UsuarioImplementationRepository extends UsuarioRepository {

  mapper = new UsuarioMapper();
  mapperCreate = new UsuarioCreateMapper()
  mapperAuth = new UsuarioAuthMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override updateUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>> {
    console.log(params, this.mapperCreate.mapTo(params));
    return this.http.put<IApiResponse<void>>(`${API_URL}/users`, this.mapperCreate.mapTo(params))
  }

  override createUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/users`, this.mapperCreate.mapTo(params))
  }

  override deleteUsuario(id: number): Observable<IApiResponse<void>> {
    return this.http.delete<IApiResponse<void>>(`${API_URL}/users?id=${id}`)
  }

  override getUsuarioById(id: number): Observable<IApiResponse<IUsuarioModel>> {
    return this.http.get<IApiResponse<IUsuarioEntity>>(`${API_URL}/users?idUser=${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override getUsuarioAuth(): Observable<IApiResponse<IUsuarioAuthModel>> {
    return this.http.get<IApiResponse<IUsuarioAuthEntity>>(`${API_URL}/user`)
      .pipe(map(responseMapper(this.mapperAuth)))
  }

  override getAllUsuarios(params: IUsuarioPaginateRequest): Observable<IApiResponsePagination<IUsuarioModel>> {
    return this.http.get<IApiResponsePagination<IUsuarioEntity>>(`${API_URL}/users`, {
      params: {
        ...params
      }
    })
      .pipe(map(responsePaginationMapper(this.mapper)))
  }
  
}