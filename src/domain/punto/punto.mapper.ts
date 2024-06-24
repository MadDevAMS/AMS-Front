import { Mapper } from "@base/mapper";
import { IPuntoEntity } from "./punto.entity";
import { IPuntoModel } from "@data/punto/models/punto.model";

export class PuntoMapper extends Mapper<IPuntoEntity, IPuntoModel> {
  override mapFrom(param: IPuntoEntity): IPuntoModel {
    return {
      id: param.idPuntoMonitoreo,
      nombre: param.detail,
      descripcion: param.description,
      angulo: param.anguloDireccion,
      direccion: param.direccionMedicion,
      datosMedicion: "-"
    }
  }
  override mapTo(param: IPuntoModel): IPuntoEntity {
    return {
      idPuntoMonitoreo: param.id,
      idComponente: param.idComponente,
      detail: param.nombre,
      description: param.descripcion,
      anguloDireccion: param.angulo,
      direccionMedicion: param.direccion,
      datosMedicion: "-"  
    }
  }
}