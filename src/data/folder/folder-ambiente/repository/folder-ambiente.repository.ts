import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IFolderAmbienteModel } from '../models/folder-ambiente.model';

export abstract class FolderAmbienteRepository {
  abstract getFolderAmbiente(id: string): Observable<IApiResponse<IFolderAmbienteModel>>;
  abstract updateFolderAmbiente(params: IFolderAmbienteModel): Observable<IApiResponse<void>>;
}