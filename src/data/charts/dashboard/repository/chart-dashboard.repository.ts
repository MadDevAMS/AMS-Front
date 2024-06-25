import { IApiResponse } from "@base/response/response";
import { IChartS3FileEntity } from "@domain/charts/dashboard/chart-s3-file.entity";
import { Observable } from "rxjs";

export abstract class ChartDashboardRepository {
  abstract getAceleracionRms(params: FormData): Observable<IApiResponse<any>> 
  abstract getTemperatura(params: FormData): Observable<IApiResponse<any>> 
  abstract getEspectroVibracion(params: FormData): Observable<IApiResponse<any>> 

  abstract getAceleracionRmsById(params: string): Observable<IApiResponse<any>> 
  abstract getTemperaturaById(params: string): Observable<IApiResponse<any>> 
  abstract getEspectroVibracionById(params: string): Observable<IApiResponse<any>> 

  abstract getFilesS3(): Observable<IApiResponse<IChartS3FileEntity[]>>
}
