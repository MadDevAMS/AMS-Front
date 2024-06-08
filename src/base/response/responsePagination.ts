import { HttpStatusCode } from '@angular/common/http';

export interface IApiResponsePagination<T> {
  status: HttpStatusCode,
  message: string,
  data: T[],
  totalRecords: number,
  totalPages: number,
  currentPage: number,
  pageSize: number,
}