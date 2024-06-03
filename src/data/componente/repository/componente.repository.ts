import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IComponenteModel } from '../models/componente.model';

export abstract class ComponenteRepository {
  abstract getComponente(id: string): Observable<IApiResponse<IComponenteModel>>;
  abstract updateComponente(params: IComponenteModel): Observable<IApiResponse<void>>;
  abstract createComponente(params: IComponenteModel): Observable<IApiResponse<void>>;
}