export interface IGrupoCreateModel {
  id?: number,
  nombre: string,
  descripcion: string,
  idPermisos: number[],
  idUsuarios: number[]
}