import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { MetricaRepository } from "../repository/metrica.repository";

@Injectable({
  providedIn: 'platform'
})
export class DeleteMetricaUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private metricaRepository: MetricaRepository) {}

  execute(id: number): Observable<IApiResponse<void>> {
    return this.metricaRepository.deleteMetrica(id);
  }
}