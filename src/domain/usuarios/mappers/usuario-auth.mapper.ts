import { Mapper } from '@base/mapper';
import { IUsuarioAuthModel } from '@data/usuarios/models/usuario-auth.model';
import { IUsuarioAuthEntity } from '../entities/usuario-auth.entity';

export class UsuarioAuthMapper extends Mapper<IUsuarioAuthEntity, IUsuarioAuthModel> {
  override mapFrom(param: IUsuarioAuthEntity): IUsuarioAuthModel {
    return {
      id: param.userId,
      nombres: param.firstName,
      apellidos: param.lastName,
      correo: param.email,
      permisos: param.permissions,
      grupos: param.groupNames
    }
  }
  override mapTo(param: IUsuarioAuthModel): IUsuarioAuthEntity {
    return {
      userId: param.id,
      firstName: param.nombres,
      lastName: param.apellidos,
      email: param.correo,
      groupNames: param.grupos,
      permissions: param.permisos
    }
  }
}