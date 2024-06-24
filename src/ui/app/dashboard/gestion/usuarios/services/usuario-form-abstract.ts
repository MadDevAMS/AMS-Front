import { IGrupoModel } from "@data/grupos/models/grupo.model";

export abstract class UsuarioFormAbstract {
  abstract gruposSeleccionados: IGrupoModel[]
  abstract onCheckboxChange(grupo: IGrupoModel): void
  abstract isChecked(grupo: IGrupoModel): boolean
}