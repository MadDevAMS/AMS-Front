import { RegisterRepository } from '@data/register/repository/register.repository';
import { Observable } from 'rxjs';
import { RegistroMapper } from '../mappers/register.mapper';
import { IFormRegisterModel } from '@data/register/models/formRegister.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { IApiResponse } from '@base/response';

export class RegisterImplementationRepository extends RegisterRepository {

  mapper = new RegistroMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override registerUser(param: IFormRegisterModel): Observable<IApiResponse<null>> {
    return this.http.post<IApiResponse<null>>(`${API_URL}/entidades`, this.mapper.mapTo(param))
  }
  
}