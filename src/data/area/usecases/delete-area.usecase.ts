import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { IAreaModel } from "../models/area.model";
import { AreaRepository } from "../repository/area.repository";

@Injectable({
  providedIn: 'platform'
})
export class DeleteAreaUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private areaRepository: AreaRepository) {}

  execute(id: number): Observable<IApiResponse<void>> {
    return this.areaRepository.deleteArea(id);
  }
}