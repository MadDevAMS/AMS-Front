import { Mapper } from '../../../base/mapper';
import { IUsuarioModel } from '../../../data/usuarios/models/usuario.model';
import { IUsuarioEntity } from '../entities/usuario.entity';

export class UsuarioMapper extends Mapper<IUsuarioEntity, IUsuarioModel> {
  override mapFrom(param: IUsuarioEntity): IUsuarioModel {
    return {
      id: param.id,
      nombres: param.firstName,
      apellidos: param.lastName,
      correo: param.email,
      fechaCreacion: param.auditCreateDate,
      grupos: param.group.map(g => ({
        id: g.id,
        nombre: g.name
      }))
    }
  }
  override mapTo(param: IUsuarioModel): IUsuarioEntity {
    return {
      id: param.id,
      firstName: param.nombres,
      lastName: param.apellidos,
      email: param.correo,
      state: 1,
      auditCreateDate: new Date(),
      group: param.grupos.map(g => ({
        id: g.id,
        name: g.nombre
      }))
    }
  }
}