import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { IPermisoModel } from '../models/permiso.model';
import { PermisoRepository } from '../repository/permiso.repository';

@Injectable({
  providedIn: 'platform'
})
export class GetAllPermisosUsecase implements UseCase<void, IPermisoModel[]> {
  constructor(private permisosRepository: PermisoRepository) { }

  execute(): Observable<IPermisoModel[]> {
    return this.permisosRepository.getAllPermisos();
  }
}