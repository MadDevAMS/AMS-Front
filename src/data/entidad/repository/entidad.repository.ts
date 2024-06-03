import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IEntidadModel } from '../models/entidad.model';

export abstract class EntidadRepository {
  abstract getEntidad(id: string): Observable<IApiResponse<IEntidadModel>>;
  abstract updateEntidad(params: IEntidadModel): Observable<IApiResponse<void>>;
}