import { HttpStatusCode } from '@angular/common/http';

export interface IApiResponse<T> {
  info: {
    status: HttpStatusCode,
    count: number,
    pages: number,
    next: string | null;
    prev: string | null;
  },
  data: T,
  errors: any
}