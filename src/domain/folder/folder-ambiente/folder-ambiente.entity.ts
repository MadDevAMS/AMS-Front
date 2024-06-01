import { IFolderEntity } from "../entities/folder.entity";

export interface IFolderAmbienteEntity extends IFolderEntity {
  tipo: 'ambiente',
  sector: string,
  responsable: string,
  descripcion: string
}
