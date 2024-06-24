import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { MetricaRepository } from '../repository/metrica.repository';
import { IMetricaModel } from '../models/metrica.model';

@Injectable({
  providedIn: 'platform'
})
export class GetMetricaUsecase implements UseCase<string, IApiResponse<IMetricaModel>> {
  constructor(private metricaRepository: MetricaRepository) { }

  execute(id: string): Observable<IApiResponse<IMetricaModel>> {
    return this.metricaRepository.getMetrica(id);
  }
}