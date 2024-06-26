import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { ChartDashboardRepository } from "@data/charts/dashboard/repository/chart-dashboard.repository";
import { Observable } from "rxjs";
import { IChartS3FileEntity } from "./chart-s3-file.entity";

@Injectable({
  providedIn: 'platform'
})
export class ChartDashboardImplementationRepository extends ChartDashboardRepository {
  constructor(private http: HttpClient) {
    super()
  }

  override getAceleracionRms(params: FormData): Observable<IApiResponse<any>> {
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/aceleracion`, params)
  }
  override getEspectroVibracion(params: FormData): Observable<IApiResponse<any>> {
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/velocidad`, params)
  }
  override getTemperatura(params: FormData): Observable<IApiResponse<any>> {
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/temperatura`, params)
  }

  override getAceleracionRmsById(params: string): Observable<IApiResponse<any>> {
    const formData = new FormData()
    formData.append('key', params)
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/s3/acceleration`, formData)
  }
  override getEspectroVibracionById(params: string): Observable<IApiResponse<any>> {
    const formData = new FormData()
    formData.append('key', params)
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/s3/velocity`, formData)
  }
  override getTemperaturaById(params: string): Observable<IApiResponse<any>> {
    const formData = new FormData()
    formData.append('key', params)
    return this.http.post<IApiResponse<any>>(`${API_URL}/metricas/s3/temperatura`, formData)
  }

  override getFilesS3(): Observable<IApiResponse<IChartS3FileEntity[]>> {
    return this.http.get<IApiResponse<IChartS3FileEntity[]>>(`${API_URL}/entidad/archivos`)
  }
}