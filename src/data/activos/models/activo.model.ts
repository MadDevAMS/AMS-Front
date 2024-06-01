export interface IActivoModel {
  id: string,
  nombre: string,
  type: 'entidad' | 'folder_ambiente' | 'folder_proceso' | 'maquina' | 'componente' | 'punto_monitoreo' | 'metrica',
  hijos: IActivoModel[]
}