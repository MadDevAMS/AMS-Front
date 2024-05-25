import { Injectable } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GetAllGruposUsecase } from '@data/grupos/usecases/get-all-grupos.usecase';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GetAllUsuariosUsecase } from '@data/usuarios/usecases/get-all-usuarios.usecase';

@Injectable({
  providedIn: 'platform',
})
export class UsuarioUsecaseService {
  grupos: IGrupoModel[] = [];
  usuarios: IUsuarioModel[] = [];

  constructor(
    private getAllUsuariosUsecase: GetAllUsuariosUsecase,
    private getAllGruposUsecase: GetAllGruposUsecase
  ) {
    this.getAllUsuariosUsecase.execute().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });

    this.getAllGruposUsecase.execute().subscribe((grupos) => {
      this.grupos = grupos;
    });
  }
}
