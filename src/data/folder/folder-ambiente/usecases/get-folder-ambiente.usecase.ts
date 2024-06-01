import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { IFolderAmbienteModel } from '../models/folder-ambiente.model';
import { FolderAmbienteRepository } from '../repository/folder-ambiente.repository';

@Injectable({
  providedIn: 'platform'
})
export class GetFolderAmbienteUsecase implements UseCase<string, IApiResponse<IFolderAmbienteModel>> {
  constructor(private folderAmbienteRepository: FolderAmbienteRepository) { }

  execute(id: string): Observable<IApiResponse<IFolderAmbienteModel>> {
    return this.folderAmbienteRepository.getFolderAmbiente(id);
  }
}