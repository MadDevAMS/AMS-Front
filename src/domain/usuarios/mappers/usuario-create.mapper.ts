import { Mapper } from '@base/mapper';
import { IUsuarioCreateModel } from '@data/usuarios/models/usuario-create.model';
import { IUsuarioCreateEntity } from '../entities/usuario-create.entity';

export class UsuarioCreateMapper extends Mapper<IUsuarioCreateEntity, IUsuarioCreateModel> {
  override mapFrom(param: IUsuarioCreateEntity): IUsuarioCreateModel {
    return {} as IUsuarioCreateModel
  }
  override mapTo(param: IUsuarioCreateModel): IUsuarioCreateEntity {
    return {
      id: param.id,
      firstName: param.nombres,
      lastName: param.apellidos,
      password: param.password || '',
      confirmPassword: param.confirmPassword || '',
      email: param.correo,
      groups: param.grupos,
      updatePassword: param.updatePassword
    }
  }
}