import { Injectable } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GetAllGruposUsecase } from '@data/grupos/usecases/get-all-grupos.usecase';
import { IPermisoModel } from '@data/permisos/models/permiso.model';
import { GetAllPermisosUsecase } from '@data/permisos/usecases/get-all-permisos.usecase';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GetAllUsuariosUsecase } from '@data/usuarios/usecases/get-all-usuarios.usecase';

@Injectable({
  providedIn: 'platform',
})
export class GrupoUsecaseService {
  grupos: IGrupoModel[] = [];
  usuarios: IUsuarioModel[] = [];
  permisos: IPermisoModel[] = [];

  constructor(
    private getAllUsuariosUsecase: GetAllUsuariosUsecase,
    private getAllGruposUsecase: GetAllGruposUsecase,
    private getAllPermisosUsecase: GetAllPermisosUsecase
  ) {
    this.getAllUsuariosUsecase.execute().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });

    this.getAllGruposUsecase.execute().subscribe((grupos) => {
      this.grupos = grupos;
    });

    this.getAllPermisosUsecase.execute().subscribe((permisos) => {
      this.permisos = permisos
    })
  }
}
