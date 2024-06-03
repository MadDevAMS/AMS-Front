import { IActivoNode } from "./activo-node";

export interface IIncidencia {
  id: string,
  type: IActivoNode["type"],
  nombre: string,
  fecha: Date
}