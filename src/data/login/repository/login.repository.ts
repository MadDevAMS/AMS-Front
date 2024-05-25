import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IFormLoginModel } from '../models/formLogin.model';

export abstract class LoginRepository {
  abstract loginUser(formlogin: IFormLoginModel): Observable<IApiResponse<string>>;
}