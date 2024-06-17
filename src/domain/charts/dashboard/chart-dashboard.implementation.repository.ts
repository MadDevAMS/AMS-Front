import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { ChartDashboardRepository } from "@data/charts/dashboard/repository/chart-dashboard.repository";
import { Observable } from "rxjs";

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
}