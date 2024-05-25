import { Observable } from 'rxjs';
import { IUsuarioModel } from '../models/usuario.model';

export abstract class UsuarioRepository {
  abstract getUsuarioById(id: number): Observable<IUsuarioModel>;
  abstract getAllUsuarios(): Observable<IUsuarioModel[]>;
}