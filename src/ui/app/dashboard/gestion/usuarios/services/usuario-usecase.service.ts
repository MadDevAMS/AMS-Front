import { Injectable } from '@angular/core';
import { IApiResponsePagination } from '@base/response/responsePagination';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GetAllGruposUsecase } from '@data/grupos/usecases/get-all-grupos.usecase';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GetAllUsuariosUsecase } from '@data/usuarios/usecases/get-all-usuarios.usecase';
import { IUsuarioPaginateRequest } from '@domain/usuarios/request/usuarioPaginate.request';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

interface IParamsPagination {
  numPage: number,
  records: number
}

@Injectable({
  providedIn: 'platform',
})
export class UsuarioUsecaseService {
  gruposInfoPaginate!: IApiResponsePagination<IGrupoModel>;
  grupos: IGrupoModel[] = [];
  gruposParams: IParamsPagination = {
    numPage: 1,
    records: 5
  }

  usuariosInfoPaginate!: IApiResponsePagination<IUsuarioModel>;
  usuarios: IUsuarioModel[] = [];
  usuariosParams: IParamsPagination = {
    numPage: 1,
    records: 10
  }

  constructor(
    private getAllUsuariosUsecase: GetAllUsuariosUsecase,
    private getAllGruposUsecase: GetAllGruposUsecase,
    private snackbarService: SnackbarService,
  ) {
    this.getAllUsuarios()
    this.getAllGrupos()
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
          this.usuariosInfoPaginate = res
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
          this.gruposInfoPaginate = res
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
  }
}