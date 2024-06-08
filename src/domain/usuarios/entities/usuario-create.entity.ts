export interface IGroupUserEntity {
  id: number,
}

export interface IUsuarioCreateEntity {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  groups: IGroupUserEntity[],
  updatePassword: boolean
}