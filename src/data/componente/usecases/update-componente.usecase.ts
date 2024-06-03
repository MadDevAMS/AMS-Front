import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IComponenteModel } from "../models/componente.model";
import { ComponenteRepository } from "../repository/componente.repository";

@Injectable({
  providedIn: 'platform'
})
export class UpdateComponenteUsecase implements UseCase<IComponenteModel, IApiResponse<void>> {
  constructor(private componenteRepository: ComponenteRepository) {}

  execute(params: IComponenteModel): Observable<IApiResponse<void>> {
    return this.componenteRepository.updateComponente(params);
  }
}