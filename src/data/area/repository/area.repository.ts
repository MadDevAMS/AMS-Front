import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IAreaModel } from '../models/area.model';

export abstract class AreaRepository {
  abstract getArea(id: string): Observable<IApiResponse<IAreaModel>>;
  abstract updateArea(params: IAreaModel): Observable<IApiResponse<void>>;
  abstract createArea(params: IAreaModel): Observable<IApiResponse<void>>;
}