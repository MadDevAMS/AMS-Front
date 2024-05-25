import { HttpStatusCode } from '@angular/common/http';

export interface IErrorResponse {
  propertyName: string,
  errorMessage: string[]
}

export interface IApiResponse<T> {
  status: HttpStatusCode,
  message: string,
  totalRecords: number,
  data: T | null,
  errors: IErrorResponse[] | null
}