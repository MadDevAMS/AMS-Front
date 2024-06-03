export interface IActivoModel {
  id: string,
  nombre: string,
  type: 'entidad' | 'area' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoModel[]
}