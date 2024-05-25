import { Observable, filter, from, map, of } from 'rxjs';
import { GrupoMapper } from './grupo.mapper';
import { IGrupoEntity } from './grupo.entity';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { IGrupoModel } from '../../data/grupos/models/grupo.model';

export class GrupoImplementationRepository extends GrupoRepository {

  mapper = new GrupoMapper();

  grupos: IGrupoEntity[] = [
    {
      id: 0,
      name: 'Grupo nro 1',
      description: 'Grupo para gestión de estudiantes'
    },
    {
      id: 1,
      name: 'Grupo nro 2',
      description: 'Grupo para gestión de estudiantes'
    },
    {
      id: 2,
      name: 'Grupo nro 3',
      description: 'Grupo para gestión de estudiantes'
    }
  ]

  override getGrupoById(id: number): Observable<IGrupoModel> {
    return from(this.grupos)
      .pipe(filter((grupo: IGrupoEntity) => grupo.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  override getAllGrupos(): Observable<IGrupoModel[]> {
    return of(this.grupos.map(this.mapper.mapFrom))
  }
  
}