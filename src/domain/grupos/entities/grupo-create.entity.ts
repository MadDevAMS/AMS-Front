export interface IGrupoCreateEntity {
  groupId?: number,
  name: string,
  description: string,
  permissions: number[],
  users: number[],
  state: number
}