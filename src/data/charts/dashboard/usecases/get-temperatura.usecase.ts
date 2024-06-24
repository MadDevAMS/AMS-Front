import { Injectable } from '@angular/core';
import { IApiResponse } from '@base/response/response';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { ChartDashboardRepository } from '../repository/chart-dashboard.repository';

@Injectable({
  providedIn: 'platform'
})
export class GetTemperaturaUsecase implements UseCase<FormData, IApiResponse<any>> {
  constructor(private chartDashboardRepository: ChartDashboardRepository){ }

  execute(params: FormData): Observable<IApiResponse<any>> {
    return this.chartDashboardRepository.getTemperatura(params)
  }
}