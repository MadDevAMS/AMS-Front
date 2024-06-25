import { Mapper } from '../../../base/mapper';
import { IGrupoModel } from '../../../data/grupos/models/grupo.model';
import { IGrupoEntity } from '../entities/grupo.entity';

export class GrupoMapper extends Mapper<IGrupoEntity, IGrupoModel> {
  override mapFrom(param: IGrupoEntity): IGrupoModel {
    return {
      id: param.groupId,
      nombre: param.name,
      permisos: param.permissions.map(p => ({
        id: p.permissionId,
        nombre: p.name,
        descripcion: p.description
      })),
      usuarios: param.users.map(u => ({
        id: u.id,
        nombres: u.firstName,
        apellidos: u.lastName,
        correo: u.email
      })),
      descripcion: param.description,
      fecha_creacion: new Date()
    }
  }
  override mapTo(param: IGrupoModel): IGrupoEntity {
    return {} as any
  }
}