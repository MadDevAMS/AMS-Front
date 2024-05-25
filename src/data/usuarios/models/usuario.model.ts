export interface IUsuarioModel {
  id: number,
  nombres: string,
  apellidos: string,
  correo: string,
  imagen: string | null,
  inicio_sesion: Date
}