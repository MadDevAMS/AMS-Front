import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IEntidadModel } from "../models/entidad.model";
import { IApiResponse } from "@base/response";
import { EntidadRepository } from "../repository/entidad.repository";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'platform'
})
export class UpdateEntidadUsecase implements UseCase<IEntidadModel, IApiResponse<void>> {
  constructor(private entidadRepository: EntidadRepository) {}

  execute(params: IEntidadModel): Observable<IApiResponse<void>> {
    return this.entidadRepository.updateEntidad(params);
  }
}