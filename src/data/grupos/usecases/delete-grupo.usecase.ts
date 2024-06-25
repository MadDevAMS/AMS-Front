import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { IApiResponse } from '@base/response/response';
import { GrupoRepository } from '../repository/grupo.repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteGrupoUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private grupoRepository: GrupoRepository) { }

  execute(id: number): Observable<IApiResponse<void>> {
    return this.grupoRepository.deleteGrupo(id);
  }
}