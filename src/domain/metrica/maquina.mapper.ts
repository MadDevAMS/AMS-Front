import { Mapper } from "@base/mapper";
import { IMetricaEntity } from "./metrica.entity";
import { IMetricaModel } from "@data/metrica/models/metrica.model";

export class MetricaMapper extends Mapper<IMetricaEntity, IMetricaModel> {
  override mapFrom(param: IMetricaEntity): IMetricaModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      tipoMetrica: param.tipoMetrica,
    }
  }
  override mapTo(param: IMetricaModel): IMetricaEntity {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      tipoMetrica: param.tipoMetrica,
    }
  }
}