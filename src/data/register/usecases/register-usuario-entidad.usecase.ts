import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRepository } from '../repository/register.repository';
import { IFormRegisterModel } from '../models/formRegister.model';
import { IApiResponse } from '@base/response';
import { UseCase } from '@base/use-case';

@Injectable({
  providedIn: 'platform'
})
export class RegisterUsuarioEntidadUsecase implements UseCase<IFormRegisterModel, IApiResponse<null>> {
  constructor(private registerRepository: RegisterRepository) { }

  execute(formRegister: IFormRegisterModel): Observable<IApiResponse<null>> {
    return this.registerRepository.registerUser(formRegister);
  }
}