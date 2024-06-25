import { IGrupoPermisoModel, IGrupoUsuarioModel } from "@data/grupos/models/grupo.model";
import { IPermisoModel } from "@data/permisos/models/permiso.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";

export abstract class GrupoFormAbstract {
  abstract usuariosSeleccionados: (IGrupoUsuarioModel | IUsuarioModel)[]
  abstract permisosSeleccionados: (IGrupoPermisoModel | IPermisoModel)[]
  abstract onCheckboxChange(item: IGrupoUsuarioModel | IUsuarioModel | (IGrupoPermisoModel | IPermisoModel), type: 'permiso' | 'usuario'): void
  abstract isChecked(item: IGrupoUsuarioModel | IUsuarioModel | (IGrupoPermisoModel | IPermisoModel), type: 'permiso' | 'usuario'): boolean
  abstract showInfoModalUsuario(usuario: IGrupoUsuarioModel | IUsuarioModel, type: 'grupos' | 'permisos'): void
}