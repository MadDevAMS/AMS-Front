export interface IPuntoEntity {
  idPuntoMonitoreo: number,
  idComponente?: number,
  detail: string,
  description: string,
  direccionMedicion: string,
  anguloDireccion: string,
  datosMedicion?: string
}