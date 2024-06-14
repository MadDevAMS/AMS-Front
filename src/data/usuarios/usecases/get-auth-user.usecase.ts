import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';
import { IUsuarioAuthModel } from '../models/usuario-auth.model';

@Injectable({
  providedIn: 'platform'
})
export class GetAuthUserUsecase implements UseCase<void, IApiResponse<IUsuarioAuthModel>> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(): Observable<IApiResponse<IUsuarioAuthModel>> {
    return this.usuariosRepository.getUsuarioAuth();
  }
}