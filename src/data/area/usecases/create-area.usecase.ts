import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response";
import { Observable } from "rxjs";
import { IAreaModel } from "../models/area.model";
import { AreaRepository } from "../repository/area.repository";

@Injectable({
  providedIn: 'platform'
})
export class CreateAreaUsecase implements UseCase<IAreaModel, IApiResponse<void>> {
  constructor(private areaRepository: AreaRepository) {}

  execute(params: IAreaModel): Observable<IApiResponse<void>> {
    return this.areaRepository.createArea(params);
  }
}