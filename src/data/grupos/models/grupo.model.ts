export interface IGrupoUsuarioModel {
  id: number,
  nombres: string,
  apellidos: string,
  correo: string
}

export interface IGrupoPermisoModel {
  id: number,
  nombre: string,
  descripcion: string
}

export interface IGrupoModel {
  id: number,
  nombre: string,
  descripcion: string | null,
  permisos: IGrupoPermisoModel[],
  usuarios: IGrupoUsuarioModel[],
  fecha_creacion: Date
}