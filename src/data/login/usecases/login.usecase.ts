import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { UseCase } from '@base/use-case';
import { IFormLoginModel } from '../models/formLogin.model';
import { LoginRepository } from '../repository/login.repository';

@Injectable({
  providedIn: 'platform'
})
export class LoginUsecase implements UseCase<IFormLoginModel, IApiResponse<string>> {
  constructor(private loginRepository: LoginRepository) { }

  execute(formLogin: IFormLoginModel): Observable<IApiResponse<string>> {
    return this.loginRepository.loginUser(formLogin);
  }
}