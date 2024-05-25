import { Injectable } from '@angular/core';
import { GrupoRepository } from '../repository/grupo.repository';
import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { IGrupoModel } from '../models/grupo.model';

@Injectable({
  providedIn: 'platform'
})
export class GetAllGruposUsecase implements UseCase<void, IGrupoModel[]> {
  constructor(private gruposRepository: GrupoRepository) { }

  execute(): Observable<IGrupoModel[]> {
    return this.gruposRepository.getAllGrupos();
  }
}