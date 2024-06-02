import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IMaquinaModel } from "../models/maquina.model";
import { MaquinaRepository } from "../repository/maquina.repository";

@Injectable({
  providedIn: 'platform'
})
export class CreateMaquinaUsecase implements UseCase<IMaquinaModel, IApiResponse<void>> {
  constructor(private maquinaRepository: MaquinaRepository) {}

  execute(params: IMaquinaModel): Observable<IApiResponse<void>> {
    return this.maquinaRepository.createMaquina(params);
  }
}