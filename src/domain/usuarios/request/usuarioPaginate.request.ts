import { IRequestPagination } from "@base/request/requestPagination";

export interface IUsuarioPaginateRequest extends IRequestPagination {
  idEntidad: number,
  userName?: string,
  userEmail?: string,
  state?: number,
  dateCreated?: string
}