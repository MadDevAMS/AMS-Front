import { Mapper } from '../../base/mapper';
import { IUsuarioModel } from '../../data/usuarios/models/usuario.model';
import { IUsuarioEntity } from './usuario.entity';

export class UsuarioMapper extends Mapper<IUsuarioEntity, IUsuarioModel> {
  override mapFrom(param: IUsuarioEntity): IUsuarioModel {
    return {
      id: param.id,
      nombres: param.nombre,
      apellidos: param.apellido,
      correo: param.email,
      imagen: param.imagen,
      inicio_sesion: new Date()
    }
  }
  override mapTo(param: IUsuarioModel): IUsuarioEntity {
    return {
      id: param.id,
      nombre: param.nombres,
      apellido: param.apellidos,
      email: param.correo,
      imagen: param.imagen
    }
  }
}