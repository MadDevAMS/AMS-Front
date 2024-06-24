import { Mapper } from "../mapper";
import { IApiResponse } from "./response";
import { IApiResponsePagination } from "./responsePagination";

export const responseMapper = <E, M>(mapper: Mapper<E, M>) => (response: IApiResponse<E>): IApiResponse<M> => {
  return {
    errors: response.errors,
    message: response.message,
    status: response.status,
    data: response.data ? mapper.mapFrom(response.data) : null
  };
};

export const responsePaginationMapper = <E, M>(mapper: Mapper<E, M>) => (response: IApiResponsePagination<E>): IApiResponsePagination<M> => {
  return {
    status: response.status,
    data: response.data ? response.data.map(mapper.mapFrom) : [],
    message: response.message,
    currentPage: response.currentPage,
    pageSize: response.pageSize,
    totalPages: response.totalPages,
    totalRecords: response.totalRecords,
  };
};
