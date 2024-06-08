import { Mapper } from '../../base/mapper';
import { IPermisoModel } from '../../data/permisos/models/permiso.model';
import { IPermisoEntity } from './permiso.entity';

export class PermisoMapper extends Mapper<IPermisoEntity, IPermisoModel> {
  override mapFrom(param: IPermisoEntity): IPermisoModel {
    return {
      id: param.id,
      nombre: param.name,
      descripcion: param.description
    }
  }
  override mapTo(param: IPermisoModel): IPermisoEntity {
    return {
      id: param.id,
      description: param.descripcion,
      name: param.nombre,
    }
  }
}