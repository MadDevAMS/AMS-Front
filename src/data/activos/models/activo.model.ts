export interface IActivoModel {
  id: number | string,
  nombre: string,
  type: 'entidad' | 'area' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoModel[]
}