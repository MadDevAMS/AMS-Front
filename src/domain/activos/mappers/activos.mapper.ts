import { Mapper } from "@base/mapper"
import { IActivoModel } from "@data/activos/models/activo.model"
import { IAreaActivoEntity, IComponenteActivoEntity, IEntidadActivoEntity, IMaquinaActivoEntity, IMetricasActivoEntity, IPuntoMonitoreoActivoEntity } from "../entities/activo.entity"
import { v4 as uuidv4 } from 'uuid';
import { METRICAS } from "@ui/shared/variables/metricas"

export class ActivosMapper extends Mapper<IEntidadActivoEntity, IActivoModel> {
  override mapFrom(param: IEntidadActivoEntity): IActivoModel {
    return {
      id: param.entidadId,
      nombre: param.entidadName,
      type: 'entidad',
      hijos: param.areas.map(area => this.mapFromArea(area))
    }
  }

  private mapFromArea = (param: IAreaActivoEntity): IActivoModel => {
    return {
      id: param.areaId,
      nombre: param.areaName,
      type: 'area',
      hijos: param.subAreas
        .map(subArea => this.mapFromArea(subArea))
        .concat(param.maquinas.map(maquina => this.mapFromMaquina(maquina)))
    }
  }

  private mapFromMaquina = (param: IMaquinaActivoEntity): IActivoModel => {
    return {
      id: param.maquinaId,
      nombre: param.maquinaName,
      type: 'maquina',
      hijos: param.componentes.map(componente => this.mapFromComponente(componente))
    }
  }

  private mapFromComponente = (param: IComponenteActivoEntity): IActivoModel => {
    return {
      id: param.componenteId,
      nombre: param.componenteName,
      type: 'componente',
      hijos: param.puntosMoniteros.map(puntoMonitoreo => this.mapFromPuntoMonitoreo(puntoMonitoreo))
    }
  }

  private mapFromPuntoMonitoreo = (param: IPuntoMonitoreoActivoEntity): IActivoModel => {
    return {
      id: param.puntoMonitoreoId,
      nombre: param.puntoMonitoreoName,
      type: 'punto_monitoreo',
      hijos: METRICAS.map(metrica => this.mapFromMetricas(metrica))
    }
  }

  private mapFromMetricas = (param: IMetricasActivoEntity): IActivoModel => {
    return {
      id: uuidv4(),
      nombre: param.metricaName,
      type: 'metrica',
      hijos: []
    }
  }

  override mapTo(param: IActivoModel): IEntidadActivoEntity {
    return {} as any
  }
}
