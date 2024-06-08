export interface IGrupoCreateEntity {
  id?: number,
  name: string,
  description: string,
  permissions: number[],
  users: number[]
}