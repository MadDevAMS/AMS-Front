export interface IUsuarioAuthModel {
  id: number,
  nombres: string,
  apellidos: string,
  correo: string,
  permisos: string[]
  grupos: string[]
}