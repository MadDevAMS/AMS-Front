import { UsuarioRepository } from '../../../data/usuarios/repository/usuario.repository';
import { Observable, filter, from, map, of } from 'rxjs';
import { IUsuarioModel } from '../../../data/usuarios/models/usuario.model';
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

export class UsuarioImplementationRepository extends UsuarioRepository {

  mapper = new UsuarioMapper();
  mapperCreate = new UsuarioCreateMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override updateUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/users`, this.mapperCreate.mapTo(params))
  }

  override createUsuario(params: IUsuarioCreateModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/users`, this.mapperCreate.mapTo(params))
  }

  override getUsuarioById(id: number): Observable<IApiResponse<IUsuarioModel>> {
    return this.http.get<IApiResponse<IUsuarioEntity>>(`${API_URL}/users?idUser=${id}`)
      .pipe(map(responseMapper(this.mapper)))
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