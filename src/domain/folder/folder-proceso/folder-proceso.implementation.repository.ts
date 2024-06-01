import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { Observable, map, of } from "rxjs";
import { responseMapper } from "@base/responseMapper";
import { IFolderProcesoEntity } from "./folder-proceso.entity";
import { FolderProcesoRepository } from "@data/folder/folder-proceso/repository/folder-proceso.repository";
import { IFolderProcesoModel } from "@data/folder/folder-proceso/models/folder-proceso.model";
import { FolderProcesoMapper } from "./folder-proceso.mapper";

export class FolderProcesoImplementationRepository extends FolderProcesoRepository {

  responseExample: IApiResponse<IFolderProcesoEntity> = {
    data: {
      id: 'Proceso1',
      nombre: 'AMS - Proceso 1',
      tipo: 'proceso',
      frecuencia: 12,
      desempeño: 'Bueno',
      prioridad: 'Alto',
      estado: 'Bueno',
      descripcion: 'Descripcion del proceso'
    },
    errors: null,
    message: 'Entidad recuperada con exito',
    status: 200,
    totalRecords: 1,
  }

  mapper = new FolderProcesoMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getFolderProceso(id: string): Observable<IApiResponse<IFolderProcesoModel>> {
    return of(this.responseExample)
      .pipe(map(responseMapper(this.mapper)))
    // return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/Entidad/${id}`)
    //   .pipe(map(responseMapper(this.mapper)))
  }

  override updateFolderProceso(params: IFolderProcesoModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Folder/${params.id}`, this.mapper.mapFrom(params))
  }
}