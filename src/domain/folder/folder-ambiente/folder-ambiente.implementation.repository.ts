import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { Observable, map, of } from "rxjs";
import { responseMapper } from "@base/responseMapper";
import { FolderAmbienteRepository } from "@data/folder/folder-ambiente/repository/folder-ambiente.repository";
import { IFolderAmbienteEntity } from "./folder-ambiente.entity";
import { FolderAmbienteMapper } from "./folder-ambiente.mapper";
import { IFolderAmbienteModel } from "@data/folder/folder-ambiente/models/folder-ambiente.model";

export class FolderAmbienteImplementationRepository extends FolderAmbienteRepository {

  responseExample: IApiResponse<IFolderAmbienteEntity> = {
    data: {
      id: 'folder1',
      nombre: 'AMS - Ambiente 1',
      tipo: 'ambiente',
      responsable: 'Jose carlos Iqueño Cruz',
      sector: 'Sector A',
      descripcion: 'Descripcion del ambiente'
    },
    errors: null,
    message: 'Entidad recuperada con exito',
    status: 200,
    totalRecords: 1,
  }

  mapper = new FolderAmbienteMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getFolderAmbiente(id: string): Observable<IApiResponse<IFolderAmbienteModel>> {
    return of(this.responseExample)
      .pipe(map(responseMapper(this.mapper)))
    // return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/Entidad/${id}`)
    //   .pipe(map(responseMapper(this.mapper)))
  }

  override updateFolderAmbiente(params: IFolderAmbienteModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/FolderAmbiente/${params.id}`, this.mapper.mapFrom(params))
  }
}