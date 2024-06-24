export interface IGrupoPermissionEntity {
  permissionId: number,
  name: string
}

export interface IGrupoEntity {
  groupId: number,
  name: string,
  description: string | null,
  fechaCreacion: Date,
  permissions: IGrupoPermissionEntity[],
  users: number[]
}