import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IFolderProcesoModel } from '../models/folder-proceso.model';

export abstract class FolderProcesoRepository {
  abstract getFolderProceso(id: string): Observable<IApiResponse<IFolderProcesoModel>>;
  abstract updateFolderProceso(params: IFolderProcesoModel): Observable<IApiResponse<void>>;
}