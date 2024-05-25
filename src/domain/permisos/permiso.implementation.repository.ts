import { Observable, filter, from, map, of } from 'rxjs';
import { PermisoMapper } from './permiso.mapper';
import { IPermisoEntity } from './permiso.entity';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';
import { IPermisoModel } from '../../data/permisos/models/permiso.model';

export class PermisoImplementationRepository extends PermisoRepository {

  mapper = new PermisoMapper();

  permisos: IPermisoEntity[] = [
    {
      id: 0,
      name: 'Permiso nro 1',
      description: 'Permiso para gestión de estudiantes'
    },
    {
      id: 1,
      name: 'Permiso nro 2',
      description: 'Permiso para gestión de estudiantes'
    },
    {
      id: 2,
      name: 'Permiso nro 3',
      description: 'Permiso para gestión de estudiantes'
    }
  ]

  override getAllPermisos(): Observable<IPermisoModel[]> {
    return of(this.permisos.map(this.mapper.mapFrom))
  }
  
}