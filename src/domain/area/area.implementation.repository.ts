import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { Observable, map, of } from "rxjs";
import { responseMapper } from "@base/responseMapper";
import { IAreaEntity } from "./areaç.entity";
import { AreaMapper } from "./area.mapper";
import { AreaRepository } from "@data/area/repository/area.repository";
import { IAreaModel } from "@data/area/models/area.model";

export class AreaImplementationRepository extends AreaRepository {

  responseExample: IApiResponse<IAreaEntity> = {
    data: {
      id: 'folder1',
      nombre: 'AMS - Ambiente 1',
      descripcion: 'Descripcion del ambiente'
    },
    errors: null,
    message: 'Entidad recuperada con exito',
    status: 200,
    totalRecords: 1,
  }

  mapper = new AreaMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getArea(id: string): Observable<IApiResponse<IAreaModel>> {
    return of(this.responseExample)
      .pipe(map(responseMapper(this.mapper)))
    // return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/Entidad/${id}`)
    //   .pipe(map(responseMapper(this.mapper)))
  }

  override updateArea(params: IAreaModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Area/${params.id}`, this.mapper.mapFrom(params))
  }

  override createArea(params: IAreaModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/Area`, this.mapper.mapFrom(params))
  }
}