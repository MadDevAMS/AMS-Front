import { IFolderModel } from "@data/folder/models/folder.model"

export interface IFolderProcesoModel extends IFolderModel {
  tipo: 'proceso',
  frecuencia: number,
  desempeño: string,
  prioridad: string,
  estado: string,
  descripcion: string
}