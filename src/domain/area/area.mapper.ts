import { Mapper } from "@base/mapper";
import { IAreaEntity } from "./areaç.entity";
import { IAreaModel } from "@data/area/models/area.model";

export class AreaMapper extends Mapper<IAreaEntity, IAreaModel> {
  override mapFrom(param: IAreaEntity): IAreaModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
    }
  }
  override mapTo(param: IAreaEntity): IAreaModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
    }
  }
}