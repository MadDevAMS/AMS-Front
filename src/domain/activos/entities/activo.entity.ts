export interface IMetricasActivoEntity {
  metricaName: string;
}

export interface IPuntoMonitoreoActivoEntity {
  puntoMonitoreoId: number;
  puntoMonitoreoName: string;
  metricas: IMetricasActivoEntity[];
}

export interface IComponenteActivoEntity {
  componenteId: number;
  componenteName: string;
  puntosMoniteros: IPuntoMonitoreoActivoEntity[];
}

export interface IMaquinaActivoEntity {
  maquinaId: number;
  maquinaName: string;
  componentes: IComponenteActivoEntity[];
}

export interface IAreaActivoEntity {
  areaId: number;
  areaName: string;
  subAreas: IAreaActivoEntity[];
  maquinas: IMaquinaActivoEntity[];
}

export interface IEntidadActivoEntity {
  entidadId: number;
  entidadName: string;
  areas: IAreaActivoEntity[];
}