export interface IActivoEntity {
  id: string,
  nombre: string,
  type: 'entidad' | 'folder' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoEntity[]
}