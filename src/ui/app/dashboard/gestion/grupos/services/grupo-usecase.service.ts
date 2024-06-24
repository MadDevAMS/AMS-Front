import { Injectable } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GetAllGruposUsecase } from '@data/grupos/usecases/get-all-grupos.usecase';
import { IPermisoModel } from '@data/permisos/models/permiso.model';
import { GetAllPermisosUsecase } from '@data/permisos/usecases/get-all-permisos.usecase';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GetAllUsuariosUsecase } from '@data/usuarios/usecases/get-all-usuarios.usecase';
import { IUsuarioPaginateRequest } from '@domain/usuarios/request/usuarioPaginate.request';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

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
    private getAllPermisosUsecase: GetAllPermisosUsecase,
    private snackbarService: SnackbarService
  ) {
    this.getAllUsuariosUsecase.execute({
      userEmail: "",
      userName: "",
      state: 1,
      numPage: 1,
      records: 10
    } as IUsuarioPaginateRequest).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los usuarios, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.usuarios = res.data
        }
      },
      error: (err) => {
        this.snackbarService.open({ 
          mensaje: err.message,
          type: 'error'
        })
      }
    });

    this.getAllGruposUsecase.execute({
      numPage: 1,
      records: 10
    }).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los grupos, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.grupos = res.data
        }
      },
      error: (err) => {
        this.snackbarService.open({ 
          mensaje: err.message,
          type: 'error'
        })
      }
    });

    this.getAllPermisosUsecase.execute({
      numPage: 1,
      records: 30
    }).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los permisos, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.permisos = res.data
        }
      },
      error: (err) => {
        this.snackbarService.open({ 
          mensaje: err.message,
          type: 'error'
        })
      }
    });
  }
}
