import { Mapper } from "@base/mapper";
import { IComponenteModel } from "@data/componente/models/componente.model";
import { IComponenteEntity } from "./componente.entity";

export class ComponenteMapper extends Mapper<IComponenteEntity, IComponenteModel> {
  override mapFrom(param: IComponenteEntity): IComponenteModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      potencia: param.potencia,
      velocidad: param.velocidad,
    }
  }
  override mapTo(param: IComponenteModel): IComponenteEntity {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      potencia: param.potencia,
      velocidad: param.velocidad,
    }
  }
}