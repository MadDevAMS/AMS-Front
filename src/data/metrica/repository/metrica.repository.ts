import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { IMetricaModel } from '../models/metrica.model';

export abstract class MetricaRepository {
  abstract getMetrica(id: string): Observable<IApiResponse<IMetricaModel>>;
  abstract updateMetrica(params: IMetricaModel): Observable<IApiResponse<void>>;
  abstract createMetrica(params: IMetricaModel): Observable<IApiResponse<void>>;
}