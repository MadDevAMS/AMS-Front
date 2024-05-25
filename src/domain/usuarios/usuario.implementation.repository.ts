import { UsuarioRepository } from '../../data/usuarios/repository/usuario.repository';
import { Observable, filter, from, map, of } from 'rxjs';
import { IUsuarioModel } from '../../data/usuarios/models/usuario.model';
import { IUsuarioEntity } from './usuario.entity';
import { UsuarioMapper } from './usuario.mapper';

export class UsuarioImplementationRepository extends UsuarioRepository {

  mapper = new UsuarioMapper();

  usuarios: IUsuarioEntity[] = [
    {
      id: 0,
      apellido: 'Condori Pinto',
      nombre: 'Juan José',
      email: 'juan.condori.p@tecsup.edu.pe',
      imagen: null
    },
    {
      id: 1,
      apellido: 'Perez',
      nombre: 'Jose',
      email: 'jose.perez@tecsup.edu.pe',
      imagen: 'https://i.pinimg.com/564x/5c/cb/9e/5ccb9e994d780aad5cfa063a23e6bf85.jpg'
    },
    {
      id: 2,
      apellido: 'Aja',
      nombre: 'Javier',
      email: 'quetepasa.javier@tecsup.edu.pe',
      imagen: 'https://i.pinimg.com/564x/1f/3a/54/1f3a54e08eb93bf65f004aef1feebbe8.jpg'
    }
  ]

  override getUsuarioById(id: number): Observable<IUsuarioModel> {
    return from(this.usuarios)
      .pipe(filter((usuario: IUsuarioEntity) => usuario.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  override getAllUsuarios(): Observable<IUsuarioModel[]> {
    return of(this.usuarios.map(this.mapper.mapFrom))
  }
  
}