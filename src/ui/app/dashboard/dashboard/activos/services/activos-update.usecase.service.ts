import { Injectable } from "@angular/core";
import { GetEntidadUsecase } from "@data/entidad/usecases/get-entidad.usecase";
import { IActivoNode } from "../interfaces/activo-node";
import { Observable } from "rxjs";
import { GetMaquinaUsecase } from "@data/maquina/usecases/get-maquina.usecase";
import { GetComponenteUsecase } from "@data/componente/usecases/get-componente.usecase";
import { GetPuntoUsecase } from "@data/punto/usecases/get-punto.usecase";
import { UpdateEntidadUsecase } from "@data/entidad/usecases/update-entidad.usecase";
import { UpdateMaquinaUsecase } from "@data/maquina/usecases/update-maquina.usecase";
import { UpdatePuntoUsecase } from "@data/punto/usecases/update-punto.usecase";
import { UpdateComponenteUsecase } from "@data/componente/usecases/update-componente.usecase";
import { UpdateFolderAmbienteUsecase } from "@data/folder/folder-ambiente/usecases/update-folder-ambiente.usecase";
import { UpdateFolderProcesoUsecase } from "@data/folder/folder-proceso/usecases/update-folder-proceso.usecase";

@Injectable({
  providedIn: 'platform'
})
export class ActivosUpdateUsecaseService {

  usecaseNode: Record<IActivoNode["type"], any> = {
    componente: this.updateComponenteUsecase,
    entidad: this.updateEntidadUsecase,
    folder_ambiente: this.updateFolderAmbienteUsecase,
    folder_proceso: this.updateFolderProcesoUsecase,
    maquina: this.updateMaquinaUsecase,
    metrica: this.updateEntidadUsecase,
    punto_monitoreo: this.updatePuntoUsecase,
  }

  constructor(
    private updateEntidadUsecase: UpdateEntidadUsecase,
    private updateMaquinaUsecase: UpdateMaquinaUsecase,
    private updateComponenteUsecase: UpdateComponenteUsecase,
    private updatePuntoUsecase: UpdatePuntoUsecase,
    private updateFolderAmbienteUsecase: UpdateFolderAmbienteUsecase,
    private updateFolderProcesoUsecase: UpdateFolderProcesoUsecase,
  ) {}

  execute(node: IActivoNode, params: any): Observable<any> {
    return this.usecaseNode[node.type].execute(params)
  }
}