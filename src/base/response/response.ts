import { HttpStatusCode } from '@angular/common/http';

export interface IErrorResponse {
  propertyName: string,
  errorMessage: string[]
}

export interface IApiResponse<T> {
  status: HttpStatusCode,
  message: string,
  data: T | null,
  errors: IErrorResponse[] | null
}