import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { IAreaModel } from '../models/area.model';

export abstract class AreaRepository {
  abstract getArea(id: number): Observable<IApiResponse<IAreaModel>>;
  abstract updateArea(params: IAreaModel): Observable<IApiResponse<void>>;
  abstract createArea(params: IAreaModel): Observable<IApiResponse<void>>;
  abstract deleteArea(id: number): Observable<IApiResponse<void>>;
}