import { Mapper } from "@base/mapper";
import { IPuntoEntity } from "./punto.entity";
import { IPuntoModel } from "@data/punto/models/punto.model";

export class PuntoMapper extends Mapper<IPuntoEntity, IPuntoModel> {
  override mapFrom(param: IPuntoEntity): IPuntoModel {
    return {
      id: param.id,
      nombre: param.detalle,
      descripcion: param.descripcion,
      angulo: param.anguloDirec,
      direccion: param.direcMedicion
    }
  }
  override mapTo(param: IPuntoModel): IPuntoEntity {
    return {
      id: param.id,
      detalle: param.nombre,
      descripcion: param.descripcion,
      anguloDirec: param.angulo,
      direcMedicion: param.direccion
    }
  }
}