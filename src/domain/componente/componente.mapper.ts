import { Mapper } from "@base/mapper";
import { IComponenteModel } from "@data/componente/models/componente.model";
import { IComponenteEntity } from "./componente.entity";

export class ComponenteMapper extends Mapper<IComponenteEntity, IComponenteModel> {
  override mapFrom(param: IComponenteEntity): IComponenteModel {
    return {
      id: param.idComponente,
      nombre: param.name,
      descripcion: param.description,
      potencia: param.potencia,
      velocidad: param.velocidad,
    }
  }
  override mapTo(param: IComponenteModel): IComponenteEntity {
    return {
      idComponente: param.id,
      idMaquina: param.idMaquina,
      name: param.nombre,
      description: param.descripcion,
      potencia: param.potencia,
      velocidad: param.velocidad,
    }
  }
}