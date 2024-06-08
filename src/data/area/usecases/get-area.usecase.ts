import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response/response';
import { AreaRepository } from '../repository/area.repository';
import { IAreaModel } from '../models/area.model';

@Injectable({
  providedIn: 'platform'
})
export class GetAreaUsecase implements UseCase<string, IApiResponse<IAreaModel>> {
  constructor(private areaRepository: AreaRepository) { }

  execute(id: string): Observable<IApiResponse<IAreaModel>> {
    return this.areaRepository.getArea(id);
  }
}