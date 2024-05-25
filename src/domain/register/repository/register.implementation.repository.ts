import { RegisterRepository } from '@data/register/repository/register.repository';
import { Observable } from 'rxjs';
import { RegistroMapper } from '../mappers/register.mapper';
import { IFormRegisterModel } from '@data/register/models/formRegister.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';

export class RegisterImplementationRepository extends RegisterRepository {

  mapper = new RegistroMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override registerUser(param: IFormRegisterModel): Observable<void> {
    console.log(this.mapper.mapTo(param));
    return this.http.post<void>(`${API_URL}`, this.mapper.mapTo(param))
  }
  
}