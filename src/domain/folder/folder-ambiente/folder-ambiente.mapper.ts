import { Mapper } from "@base/mapper";
import { IFolderAmbienteEntity } from "./folder-ambiente.entity";
import { IFolderAmbienteModel } from "@data/folder/folder-ambiente/models/folder-ambiente.model";

export class FolderAmbienteMapper extends Mapper<IFolderAmbienteEntity, IFolderAmbienteModel> {
  override mapFrom(param: IFolderAmbienteEntity): IFolderAmbienteModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      responsable: param.responsable,
      sector: param.sector,
      tipo: param.tipo
    }
  }
  override mapTo(param: IFolderAmbienteEntity): IFolderAmbienteModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      responsable: param.responsable,
      sector: param.sector,
      tipo: param.tipo
    }
  }
}