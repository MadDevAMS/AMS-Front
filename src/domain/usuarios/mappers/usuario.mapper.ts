import { IGrupoPermisoModel, IGrupoUsuarioModel } from '@data/grupos/models/grupo.model';
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
        id: g.groupId,
        nombre: g.name,
        descripcion: g.description,
        fecha_creacion: g.fechaCreacion,
        permisos: g.permissions.map(p => ({
          id: p.permissionId,
          descripcion: p.description,
          nombre: p.name
        } as IGrupoPermisoModel)),
        usuarios: g.users.map(u => ({
          id: u.id,
          nombres: u.firstName,
          apellidos: u.lastName,
          correo: u.email
        } as IGrupoUsuarioModel)),
      }))
    }
  }
  override mapTo(param: IUsuarioModel): IUsuarioEntity {
    return {} as IUsuarioEntity
  }
}