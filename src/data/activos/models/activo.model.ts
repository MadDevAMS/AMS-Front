export interface IActivoModel {
  id: string,
  nombre: string,
  type: 'entidad' | 'folder' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoModel[]
}