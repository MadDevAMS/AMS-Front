import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IMaquinaModel } from '../models/maquina.model';

export abstract class MaquinaRepository {
  abstract getMaquina(id: string): Observable<IApiResponse<IMaquinaModel>>;
  abstract updateMaquina(params: IMaquinaModel): Observable<IApiResponse<void>>;
}