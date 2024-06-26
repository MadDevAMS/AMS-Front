import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { IMetricaModel } from "../models/metrica.model";
import { MetricaRepository } from "../repository/metrica.repository";

@Injectable({
  providedIn: 'platform'
})
export class UpdateMetricaUsecase implements UseCase<IMetricaModel, IApiResponse<void>> {
  constructor(private metricaRepository: MetricaRepository) {}

  execute(params: IMetricaModel): Observable<IApiResponse<void>> {
    return this.metricaRepository.updateMetrica(params);
  }
}