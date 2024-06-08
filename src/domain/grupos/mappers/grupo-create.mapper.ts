import { Mapper } from '@base/mapper';
import { IGrupoCreateModel } from '@data/grupos/models/grupo-create.model';
import { IGrupoCreateEntity } from '../entities/grupo-create.entity';

export class GrupoCreateMapper extends Mapper<IGrupoCreateEntity, IGrupoCreateModel> {
  override mapFrom(param: IGrupoCreateEntity): IGrupoCreateModel {
    return {
      id: param.id,
      nombre: param.name,
      descripcion: param.description,
      idPermisos: param.permissions,
      idUsuarios: param.users
    }
  }
  override mapTo(param: IGrupoCreateModel): IGrupoCreateEntity {
    return {
      id: param.id,
      name: param.nombre,
      description: param.descripcion,
      permissions: param.idPermisos,
      users: param.idUsuarios
    }
  }
}