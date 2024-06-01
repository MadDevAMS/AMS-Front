import { IFolderModel } from "@data/folder/models/folder.model";

export interface IFolderAmbienteModel extends IFolderModel {
  tipo: 'ambiente',
  sector: string,
  responsable: string,
  descripcion: string
}
