import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { IEntidadModel } from "@data/entidad/models/entidad.model";
import { EntidadRepository } from "@data/entidad/repository/entidad.repository";
import { Observable, map, of } from "rxjs";
import { EntidadMapper } from "./entidad.mapper";
import { responseMapper } from "@base/response/response.mapper";
import { IEntidadEntity } from "./entidad.entity";

export class EntidadImplementationRepository extends EntidadRepository {

  mapper = new EntidadMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getEntidad(): Observable<IApiResponse<IEntidadModel>> {
    return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/entidad`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateEntidad(params: IEntidadModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/entidades`, this.mapper.mapTo(params))
  }
}