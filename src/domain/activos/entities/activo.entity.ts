export interface IActivoEntity {
  id: string,
  nombre: string,
  type: 'entidad' | 'area' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoEntity[]
}