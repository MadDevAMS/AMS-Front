import { IGrupoEntity } from "@domain/grupos/entities/grupo.entity"

export interface IGroupUserEntity {
  id: number,
  name: string
}

export interface IUsuarioEntity {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  state: number,
  auditCreateDate: Date,
  group: IGrupoEntity[]
}