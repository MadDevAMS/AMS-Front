import { Mapper } from "@base/mapper";
import { IAreaEntity } from "./area.entity";
import { IAreaModel } from "@data/area/models/area.model";

export class AreaMapper extends Mapper<IAreaEntity, IAreaModel> {
  override mapFrom(param: IAreaEntity): IAreaModel {
    return {
      id: param.idArea,
      idParent: param.idParent,
      nombre: param.name,
      descripcion: param.description,
    }
  }
  override mapTo(param: IAreaModel): IAreaEntity {
    return {
      idArea: param.id,
      idParent: param.idParent,
      name: param.nombre,
      description: param.descripcion
    }
  }
}