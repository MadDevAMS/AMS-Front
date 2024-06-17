import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";

export abstract class ChartDashboardRepository {
  abstract getAceleracionRms(params: FormData): Observable<IApiResponse<any>> 
  abstract getTemperatura(params: FormData): Observable<IApiResponse<any>> 
  abstract getEspectroVibracion(params: FormData): Observable<IApiResponse<any>> 
}
