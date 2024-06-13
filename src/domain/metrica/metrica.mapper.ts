import { Mapper } from "@base/mapper";
import { IMetricaEntity } from "./metrica.entity";
import { IMetricaModel } from "@data/metrica/models/metrica.model";

export class MetricaMapper extends Mapper<IMetricaEntity, IMetricaModel> {
  override mapFrom(param: IMetricaEntity): IMetricaModel {
    return {
      id: param.id,
      idPuntoMonitoreo: param.idPuntoMonitoreo,
      nombre: param.name,
      descripcion: param.description,
      tipoMetrica: param.tipo,
    }
  }
  override mapTo(param: IMetricaModel): IMetricaEntity {
    return {
      id: param.id,
      idPuntoMonitoreo: param.idPuntoMonitoreo,
      name: param.nombre,
      description: param.descripcion,
      tipo: param.tipoMetrica,
    }
  }
}