import { Mapper } from "@base/mapper"
import { IActivoEntity } from "../entities/activo.entity"
import { IActivoModel } from "@data/activos/models/activo.model"

export class ActivosMapper extends Mapper<IActivoEntity, IActivoModel> {
  override mapFrom(param: IActivoEntity): IActivoModel {
    return {
      id: param.id,
      nombre: param.nombre,
      type: param.type,
      hijos: param.hijos.map(this.mapFrom),
    }
  }
  override mapTo(param: IActivoModel): IActivoEntity {
    return {
      id: param.id,
      nombre: param.nombre,
      type: param.type,
      hijos: param.hijos.map(this.mapTo)
    }
  }
}