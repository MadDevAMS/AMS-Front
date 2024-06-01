import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IFolderProcesoModel } from "../models/folder-proceso.model";
import { FolderProcesoRepository } from "../repository/folder-proceso.repository";

@Injectable({
  providedIn: 'platform'
})
export class UpdateFolderProcesoUsecase implements UseCase<IFolderProcesoModel, IApiResponse<void>> {
  constructor(private folderProcesoRepository: FolderProcesoRepository) {}

  execute(params: IFolderProcesoModel): Observable<IApiResponse<void>> {
    return this.folderProcesoRepository.updateFolderProceso(params);
  }
}