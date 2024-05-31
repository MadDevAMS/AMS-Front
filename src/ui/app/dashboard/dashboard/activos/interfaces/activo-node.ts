import { IActivoModel } from "@data/activos/models/activo.model";

export interface IActivoNode {
  id: IActivoModel["id"],
  nombre: IActivoModel["nombre"];
  type: IActivoModel["type"],
  level: number;
  expandable: boolean;
  isExpanded?: boolean;
}