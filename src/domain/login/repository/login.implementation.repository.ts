import { Observable } from 'rxjs';
import { LoginMapper } from '../mappers/login.mapper';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { IApiResponse } from '@base/response/response';
import { LoginRepository } from '@data/login/repository/login.repository';
import { IFormLoginModel } from '@data/login/models/formLogin.model';

export class LoginImplementationRepository extends LoginRepository {

  mapper = new LoginMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override loginUser(param: IFormLoginModel): Observable<IApiResponse<string>> {
    return this.http.post<IApiResponse<string>>(`${API_URL}/login`, this.mapper.mapTo(param))
  }
  
}