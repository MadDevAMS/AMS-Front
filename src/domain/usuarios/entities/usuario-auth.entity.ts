export interface IUsuarioAuthEntity {
  userId: number,
  firstName: string,
  lastName: string,
  email: string,
  permissions: string[]
  groupNames: string[]
}