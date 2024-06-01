import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IFolderProcesoModel } from '../models/folder-proceso.model';
import { FolderProcesoRepository } from '../repository/folder-proceso.repository';

@Injectable({
  providedIn: 'platform'
})
export class GetFolderProcesoUsecase implements UseCase<string, IApiResponse<IFolderProcesoModel>> {
  constructor(private folderProcesoRepository: FolderProcesoRepository) { }

  execute(id: string): Observable<IApiResponse<IFolderProcesoModel>> {
    return this.folderProcesoRepository.getFolderProceso(id);
  }
}