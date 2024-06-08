import { IGrupoModel } from "@data/grupos/models/grupo.model";

export interface IUsuarioCreateModel {
  id?: number,
  nombres: string,
  apellidos: string,
  correo: string,
  password: string,
  confirmPassword: string,
  grupos: IGrupoModel[],
  updatePassword: boolean
}