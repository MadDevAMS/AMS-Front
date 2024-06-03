import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IMetricaModel } from "../models/metrica.model";
import { MetricaRepository } from "../repository/metrica.repository";

@Injectable({
  providedIn: 'platform'
})
export class CreateMetricaUsecase implements UseCase<IMetricaModel, IApiResponse<void>> {
  constructor(private metricaRepository: MetricaRepository) {}

  execute(params: IMetricaModel): Observable<IApiResponse<void>> {
    return this.metricaRepository.createMetrica(params);
  }
}