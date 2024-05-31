import { Injectable } from "@angular/core";
import { GetEntidadUsecase } from "@data/entidad/usecases/get-entidad.usecase";
import { IActivoNode } from "../interfaces/activo-node";
import { Observable } from "rxjs";
import { GetMaquinaUsecase } from "@data/maquina/usecases/get-maquina.usecase";
import { GetComponenteUsecase } from "@data/componente/usecases/get-componente.usecase";
import { GetPuntoUsecase } from "@data/punto/usecases/get-punto.usecase";

@Injectable({
  providedIn: 'platform'
})
export class ActivosFormUsecaseService {

  usecaseNode: Record<IActivoNode["type"], any> = {
    componente: this.getComponenteUsecase,
    entidad: this.getEntidadUsecase,
    folder: this.getEntidadUsecase,
    maquina: this.getMaquinaUsecase,
    metrica: this.getEntidadUsecase,
    punto_monitoreo: this.getPuntoUsecase,
  }

  constructor(
    private getEntidadUsecase: GetEntidadUsecase,
    private getMaquinaUsecase: GetMaquinaUsecase,
    private getComponenteUsecase: GetComponenteUsecase,
    private getPuntoUsecase: GetPuntoUsecase
  ) {}

  execute(node: IActivoNode): Observable<any> {
    return this.usecaseNode[node.type].execute(node.id)
  }
}