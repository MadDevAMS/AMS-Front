import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { FolderAmbienteRepository } from "../repository/folder-ambiente.repository";
import { IFolderAmbienteModel } from "../models/folder-ambiente.model";

@Injectable({
  providedIn: 'platform'
})
export class UpdateFolderAmbienteUsecase implements UseCase<IFolderAmbienteModel, IApiResponse<void>> {
  constructor(private folderAmbienteRepository: FolderAmbienteRepository) {}

  execute(params: IFolderAmbienteModel): Observable<IApiResponse<void>> {
    return this.folderAmbienteRepository.updateFolderAmbiente(params);
  }
}