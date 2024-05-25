import { Injectable } from '@angular/core';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { IUsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'platform'
})
export class GetAllUsuariosUsecase implements UseCase<void, IUsuarioModel[]> {
  constructor(private usuariosRepository: UsuarioRepository) { }

  execute(): Observable<IUsuarioModel[]> {
    return this.usuariosRepository.getAllUsuarios();
  }
}