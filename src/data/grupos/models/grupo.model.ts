export interface IGrupoModel {
  id: number,
  nombre: string,
  descripcion: string | null,
  permisos: string[],
  fecha_creacion: Date
}