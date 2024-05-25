import { Observable } from 'rxjs';
import { IFormRegisterModel } from '../models/formRegister.model';

export abstract class RegisterRepository {
  abstract registerUser(formRegister: IFormRegisterModel): Observable<void>;
}