import { Injectable } from '@angular/core';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GetAllGruposUsecase } from '@data/grupos/usecases/get-all-grupos.usecase';
import { IPermisoModel } from '@data/permisos/models/permiso.model';
import { GetAllPermisosUsecase } from '@data/permisos/usecases/get-all-permisos.usecase';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GetAllUsuariosUsecase } from '@data/usuarios/usecases/get-all-usuarios.usecase';
import { IUsuarioPaginateRequest } from '@domain/usuarios/request/usuarioPaginate.request';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

interface IParamsPagination {
  numPage: number,
  records: number
}
@Injectable({
  providedIn: 'root',
})
export class GrupoUsecaseService {
  gruposInfoPaginate!: IApiResponsePagination<IGrupoModel>;
  grupos: IGrupoModel[] = [];
  gruposParams: IParamsPagination = {
    numPage: 1,
    records: 10
  }

  usuariosInfoPaginate!: IApiResponsePagination<IUsuarioModel>;
  usuarios: IUsuarioModel[] = [];
  usuariosParams: IParamsPagination = {
    numPage: 1,
    records: 5
  }

  permisosInfoPaginate!: IApiResponsePagination<IPermisoModel>;
  permisos: IPermisoModel[] = [];
  permisosParams: IParamsPagination = {
    numPage: 1,
    records: 5
  }

  constructor(
    private getAllUsuariosUsecase: GetAllUsuariosUsecase,
    private getAllGruposUsecase: GetAllGruposUsecase,
    private getAllPermisosUsecase: GetAllPermisosUsecase,
    private snackbarService: SnackbarService
  ) {
    this.getAllUsuarios()
    this.getAllPermisos()
    this.getAllGrupos()
  }

  getAllGrupos() {
    this.getAllGruposUsecase.execute({
      ...this.gruposParams
    }).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los grupos, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.grupos = res.data
          this.gruposInfoPaginate = res
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

  getAllUsuarios() {
    this.getAllUsuariosUsecase.execute({
      userEmail: "",
      userName: "",
      state: 1,
      ...this.usuariosParams
    } as IUsuarioPaginateRequest).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los usuarios, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.usuarios = res.data
          this.usuariosInfoPaginate = res
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

  getAllPermisos() {
    this.getAllPermisosUsecase.execute({
      ...this.permisosParams
    }).subscribe({
      next: (res) => {
        if (res.status !== 200) {
          this.snackbarService.open({ 
            mensaje: res.message || 'Ha ocurrido un error al intentar obtener los permisos, revise sus datos o consulte a su administrador',
            type: 'error'
          })
        } else {
          this.permisos = res.data
          this.permisosInfoPaginate = res
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
