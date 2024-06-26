import { Injectable } from '@angular/core';
import { IUsuarioAuthModel } from '@data/usuarios/models/usuario-auth.model';
import { GetAuthUserUsecase } from '@data/usuarios/usecases/get-auth-user.usecase';
import { jwtDecode } from 'jwt-decode'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataUser: IUsuarioAuthModel = {} as any

  constructor(
    private getAuthUserUsecase: GetAuthUserUsecase
  ) { }

  isAuthObserve() {
    return this.getAuthUserUsecase.execute()
      .pipe(map(res => {
        if (res.data) {
          this.dataUser = res.data as IUsuarioAuthModel
        }
        return res
      }))
  }

  getIdEntidad() {
    const token = localStorage.getItem('token')
    if (token) {
      const decode = jwtDecode<any>(token)
      return decode?.IdEntidad
    }
  }

}
