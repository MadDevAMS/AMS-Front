import { Observable } from 'rxjs';
import { IFormRegisterModel } from '../models/formRegister.model';
import { IApiResponse } from '@base/response';

export abstract class RegisterRepository {
  abstract registerUser(formRegister: IFormRegisterModel): Observable<IApiResponse<null>>;
}