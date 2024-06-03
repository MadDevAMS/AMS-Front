import { Mapper } from "./mapper";
import { IApiResponse } from "./response";

export const responseMapper = <E, M>(mapper: Mapper<E, M>) => (response: IApiResponse<E>): IApiResponse<M> => {
  return {
    errors: response.errors,
    message: response.message,
    status: response.status,
    totalRecords: response.totalRecords,
    data: response.data ? mapper.mapFrom(response.data) : null
  };
};
