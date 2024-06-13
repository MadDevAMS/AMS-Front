import { Mapper } from "@base/mapper";
import { IEntidadModel } from "@data/entidad/models/entidad.model";
import { IEntidadEntity } from "./entidad.entity";

export class EntidadMapper extends Mapper<IEntidadEntity, IEntidadModel> {
  override mapFrom(param: IEntidadEntity): IEntidadModel {
    return {
      id: param.id,
      email: param.email,
      direccion: param.direccion,
      imagen: param.image,
      nombre: param.nombre,
      razonSocial: param.razonSocial,
      ruc: param.ruc,
      telefono: param.telefono
    }
  }
  override mapTo(param: IEntidadModel): IEntidadEntity {
    return {
      id: param.id,
      email: param.email,
      direccion: param.direccion,
      image: param.imagen,
      nombre: param.nombre,
      razonSocial: param.razonSocial,
      ruc: param.ruc,
      telefono: param.telefono
    }
  }
}