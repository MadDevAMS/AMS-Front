import { Injectable } from "@angular/core";
import { IActivoNode } from "../interfaces/activo-node";
import { Observable } from "rxjs";
import { UpdateEntidadUsecase } from "@data/entidad/usecases/update-entidad.usecase";
import { UpdateMaquinaUsecase } from "@data/maquina/usecases/update-maquina.usecase";
import { UpdatePuntoUsecase } from "@data/punto/usecases/update-punto.usecase";
import { UpdateComponenteUsecase } from "@data/componente/usecases/update-componente.usecase";
import { UpdateAreaUsecase } from "@data/area/usecases/update-area.usecase";
import { UpdateMetricaUsecase } from "@data/metrica/usecases/update-metrica.usecase";

@Injectable({
  providedIn: 'platform'
})
export class ActivosUpdateUsecaseService {

  usecaseNode: Record<IActivoNode["type"], any> = {
    entidad: this.updateEntidadUsecase,
    area: this.updateAreaUsecase,
    maquina: this.updateMaquinaUsecase,
    componente: this.updateComponenteUsecase,
    punto_monitoreo: this.updatePuntoUsecase,
    metrica: this.updateMetricaUsecase,
  }

  constructor(
    private updateEntidadUsecase: UpdateEntidadUsecase,
    private updateMaquinaUsecase: UpdateMaquinaUsecase,
    private updateComponenteUsecase: UpdateComponenteUsecase,
    private updatePuntoUsecase: UpdatePuntoUsecase,
    private updateAreaUsecase: UpdateAreaUsecase,
    private updateMetricaUsecase: UpdateMetricaUsecase,
  ) {}

  execute(node: IActivoNode, params: any): Observable<any> {
    return this.usecaseNode[node.type].execute(params)
  }
}