export interface IGrupoPermisoModel {
  id: number,
  nombre: string
}

export interface IGrupoModel {
  id: number,
  nombre: string,
  descripcion: string | null,
  permisos: IGrupoPermisoModel[],
  fecha_creacion: Date
}