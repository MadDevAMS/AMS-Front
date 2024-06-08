import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IUsuarioModel } from '../models/usuario.model';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IRequestPagination } from '@base/request/requestPagination';

@Injectable({
  providedIn: 'platform'
})
export class GetAllUsuariosUsecase implements UseCase<IRequestPagination, IApiResponsePagination<IUsuarioModel>> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(params: IRequestPagination): Observable<IApiResponsePagination<IUsuarioModel>> {
    return this.usuariosRepository.getAllUsuarios(params);
  }
}