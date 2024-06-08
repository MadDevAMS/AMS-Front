import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IUsuarioCreateModel } from '../models/usuario-create.model';
import { IApiResponse } from '@base/response/response';

@Injectable({
  providedIn: 'platform'
})
export class CreateUsuarioUsecase implements UseCase<IUsuarioCreateModel, IApiResponse<void>> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(params: IUsuarioCreateModel): Observable<IApiResponse<void>> {
    return this.usuariosRepository.createUsuario(params);
  }
}