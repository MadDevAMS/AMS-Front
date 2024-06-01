import { IFolderEntity } from "../entities/folder.entity";

export interface IFolderProcesoEntity extends IFolderEntity {
  tipo: 'proceso',
  frecuencia: number,
  desempeño: string,
  prioridad: string,
  estado: string,
  descripcion: string
}
