export interface IUsuarioCreateModel {
  id?: number,
  nombres: string,
  apellidos: string,
  correo: string,
  password: string,
  confirmPassword: string,
  grupos: number[],
  updatePassword: boolean
}