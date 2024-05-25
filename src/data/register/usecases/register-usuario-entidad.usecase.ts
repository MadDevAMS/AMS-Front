import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { RegisterRepository } from '../repository/register.repository';
import { IFormRegisterModel } from '../models/formRegister.model';

@Injectable({
  providedIn: 'platform'
})
export class RegisterUsuarioEntidadUsecase implements UseCase<IFormRegisterModel, void> {
  constructor(private registerRepository: RegisterRepository) { }

  execute(formRegister: IFormRegisterModel): Observable<void> {
    return this.registerRepository.registerUser(formRegister);
  }
}