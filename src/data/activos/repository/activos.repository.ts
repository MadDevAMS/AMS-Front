import { Observable } from 'rxjs';
import { IActivoModel } from '../models/activo.model';
import { IApiResponse } from '@base/response';

export abstract class ActivoRepository {
  abstract getActivos(): Observable<IApiResponse<IActivoModel>>;
  abstract deleteActivos(id: string): Observable<IApiResponse<void>>;
}