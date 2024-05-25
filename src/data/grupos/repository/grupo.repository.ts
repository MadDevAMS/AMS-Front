import { Observable } from 'rxjs';
import { IGrupoModel } from '../models/grupo.model';

export abstract class GrupoRepository {
  abstract getGrupoById(id: number): Observable<IGrupoModel>;
  abstract getAllGrupos(): Observable<IGrupoModel[]>;
}