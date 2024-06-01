import { Mapper } from "@base/mapper";
import { IFolderProcesoEntity } from "./folder-proceso.entity";
import { IFolderProcesoModel } from "@data/folder/folder-proceso/models/folder-proceso.model";

export class FolderProcesoMapper extends Mapper<IFolderProcesoEntity, IFolderProcesoModel> {
  override mapFrom(param: IFolderProcesoEntity): IFolderProcesoModel {
    return {
      id: param.id,
      nombre: param.nombre,
      tipo: param.tipo,
      estado: param.estado,
      frecuencia: param.frecuencia,
      prioridad: param.prioridad,
      desempeño: param.desempeño,
      descripcion: param.descripcion
    }
  }
  override mapTo(param: IFolderProcesoEntity): IFolderProcesoModel {
    return {
      id: param.id,
      nombre: param.nombre,
      tipo: param.tipo,
      estado: param.estado,
      frecuencia: param.frecuencia,
      prioridad: param.prioridad,
      desempeño: param.desempeño,
      descripcion: param.descripcion
    }
  }
}