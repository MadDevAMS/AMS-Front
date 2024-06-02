import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IPuntoModel } from "../models/punto.model";
import { PuntoRepository } from "../repository/punto.repository";

@Injectable({
  providedIn: 'platform'
})
export class CreatePuntoUsecase implements UseCase<IPuntoModel, IApiResponse<void>> {
  constructor(private puntoRepository: PuntoRepository) {}

  execute(params: IPuntoModel): Observable<IApiResponse<void>> {
    return this.puntoRepository.createPunto(params);
  }
}