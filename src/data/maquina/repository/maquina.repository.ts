import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { IMaquinaModel } from '../models/maquina.model';

export abstract class MaquinaRepository {
  abstract getMaquina(id: number): Observable<IApiResponse<IMaquinaModel>>;
  abstract updateMaquina(params: IMaquinaModel): Observable<IApiResponse<void>>;
  abstract createMaquina(params: IMaquinaModel): Observable<IApiResponse<void>>;
  abstract deleteMaquina(id: number): Observable<IApiResponse<void>>;
}