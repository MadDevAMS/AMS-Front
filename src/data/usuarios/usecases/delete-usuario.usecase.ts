import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';

@Injectable({
  providedIn: 'platform'
})
export class DeleteUsuarioUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(id: number): Observable<IApiResponse<void>> {
    return this.usuariosRepository.deleteUsuario(id);
  }
}