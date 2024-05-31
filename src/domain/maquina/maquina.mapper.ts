import { Mapper } from "@base/mapper";
import { IMaquinaModel } from "@data/maquina/models/maquina.model";
import { IMaquinaEntity } from "./maquina.entity";

export class MaquinaMapper extends Mapper<IMaquinaEntity, IMaquinaModel> {
  override mapFrom(param: IMaquinaEntity): IMaquinaModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      tipoMaquina: param.tipoMaquina,
      fundacion: param.fundacion
    }
  }
  override mapTo(param: IMaquinaModel): IMaquinaEntity {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      tipoMaquina: param.tipoMaquina,
      fundacion: param.fundacion
    }
  }
}