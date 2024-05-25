import { HttpStatusCode } from '@angular/common/http';

export interface IErrorResponse {
  PropertyName: string,
  ErrorMessage: string[]
}

export interface IApiResponse<T> {
  Status: HttpStatusCode,
  Message: string,
  TotalRecords: number,
  Data: T,
  Errors: IErrorResponse[]
}