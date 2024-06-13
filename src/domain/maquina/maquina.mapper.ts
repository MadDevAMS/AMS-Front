import { Mapper } from "@base/mapper";
import { IMaquinaModel } from "@data/maquina/models/maquina.model";
import { IMaquinaEntity } from "./maquina.entity";

export class MaquinaMapper extends Mapper<IMaquinaEntity, IMaquinaModel> {
  override mapFrom(param: IMaquinaEntity): IMaquinaModel {
    return {
      id: param.idMaquina,
      nombre: param.name,
      descripcion: param.description,
      tipoMaquina: param.tipoMaquina,
    }
  }
  override mapTo(param: IMaquinaModel): IMaquinaEntity {
    return {
      idMaquina: param.id,
      idArea: param.idArea,
      name: param.nombre,
      description: param.descripcion,
      tipoMaquina: param.tipoMaquina,
    }
  }
}