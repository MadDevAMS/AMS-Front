export interface IGrupoUsersEntity {
  id: number,
  firstName: string,
  lastName: string,
  email: string
}

export interface IGrupoPermissionEntity {
  permissionId: number,
  name: string,
  description: string
}

export interface IGrupoEntity {
  groupId: number,
  name: string,
  description: string | null,
  fechaCreacion: Date,
  permissions: IGrupoPermissionEntity[],
  users: IGrupoUsersEntity[]
}