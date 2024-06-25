import { IGrupoModel } from "@data/grupos/models/grupo.model"

export interface IUsuarioModel {
  id: number,
  nombres: string,
  apellidos: string,
  correo: string,
  fechaCreacion: Date,
  grupos: IGrupoModel[]
}