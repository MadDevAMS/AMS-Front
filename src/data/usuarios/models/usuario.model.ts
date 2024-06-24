export interface IGruposUsuarioModel {
  id: number,
  nombre: string
}

export interface IUsuarioModel {
  id: number,
  nombres: string,
  apellidos: string,
  correo: string,
  fechaCreacion: Date,
  grupos: IGruposUsuarioModel[]
}