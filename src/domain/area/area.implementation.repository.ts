import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { Observable, map, of } from "rxjs";
import { responseMapper } from "@base/response/response.mapper";
import { IAreaEntity } from "./area.entity";
import { AreaMapper } from "./area.mapper";
import { AreaRepository } from "@data/area/repository/area.repository";
import { IAreaModel } from "@data/area/models/area.model";

export class AreaImplementationRepository extends AreaRepository {

  mapper = new AreaMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getArea(id: number): Observable<IApiResponse<IAreaModel>> {
    return this.http.get<IApiResponse<IAreaEntity>>(`${API_URL}/areas?idArea=${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateArea(params: IAreaModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/areas`, this.mapper.mapTo(params))
  }

  override createArea(params: IAreaModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/areas`, this.mapper.mapTo(params))
  }

  override deleteArea(id: number): Observable<IApiResponse<void>> {
    return this.http.delete<IApiResponse<void>>(`${API_URL}/areas?idArea=${id}`)
  }
}