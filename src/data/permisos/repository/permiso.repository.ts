import { Observable } from 'rxjs';
import { IPermisoModel } from '../models/permiso.model';

export abstract class PermisoRepository {
  abstract getAllPermisos(): Observable<IPermisoModel[]>;
}