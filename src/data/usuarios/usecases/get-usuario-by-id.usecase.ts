import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';
import { IUsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'platform'
})
export class GetUsuarioByIdUsecase implements UseCase<number, IApiResponse<IUsuarioModel>> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(id: number): Observable<IApiResponse<IUsuarioModel>> {
    return this.usuariosRepository.getUsuarioById(id);
  }
}