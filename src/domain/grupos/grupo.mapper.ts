import { Mapper } from '../../base/mapper';
import { IGrupoModel } from '../../data/grupos/models/grupo.model';
import { IGrupoEntity } from './grupo.entity';

export class GrupoMapper extends Mapper<IGrupoEntity, IGrupoModel> {
  override mapFrom(param: IGrupoEntity): IGrupoModel {
    return {
      id: param.id,
      nombre: param.name,
      permisos: [],
      descripcion: param.description,
      fecha_creacion: new Date()
    }
  }
  override mapTo(param: IGrupoModel): IGrupoEntity {
    return {
      id: param.id,
      description: param.descripcion,
      name: param.nombre
    }
  }
}