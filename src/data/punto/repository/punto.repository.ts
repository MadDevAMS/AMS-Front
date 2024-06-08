import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { IPuntoModel } from '../models/punto.model';

export abstract class PuntoRepository {
  abstract getPunto(id: string): Observable<IApiResponse<IPuntoModel>>;
  abstract updatePunto(params: IPuntoModel): Observable<IApiResponse<void>>;
  abstract createPunto(params: IPuntoModel): Observable<IApiResponse<void>>;
}