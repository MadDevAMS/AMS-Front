import { IPermisoModel } from "@data/permisos/models/permiso.model";
import { IUsuarioModel } from "@data/usuarios/models/usuario.model";

export abstract class GrupoFormAbstract {
  abstract usuariosSeleccionados: IUsuarioModel[]
  abstract permisosSeleccionados: IPermisoModel[]
  abstract onCheckboxChange(item: IUsuarioModel | IPermisoModel, type: 'permiso' | 'usuario'): void
  abstract isChecked(item: IUsuarioModel | IPermisoModel, type: 'permiso' | 'usuario'): boolean
  abstract showInfoModalUsuario(usuario: IUsuarioModel, type: 'grupos' | 'permisos'): void
}