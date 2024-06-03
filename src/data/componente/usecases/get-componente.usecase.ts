import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { IApiResponse } from '@base/response';
import { ComponenteRepository } from '../repository/componente.repository';
import { IComponenteModel } from '../models/componente.model';

@Injectable({
  providedIn: 'platform'
})
export class GetComponenteUsecase implements UseCase<string, IApiResponse<IComponenteModel>> {
  constructor(private componenteRepository: ComponenteRepository) { }

  execute(id: string): Observable<IApiResponse<IComponenteModel>> {
    return this.componenteRepository.getComponente(id);
  }
}