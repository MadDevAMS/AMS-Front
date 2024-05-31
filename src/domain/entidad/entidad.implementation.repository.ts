import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { IEntidadModel } from "@data/entidad/models/entidad.model";
import { EntidadRepository } from "@data/entidad/repository/entidad.repository";
import { Observable, map } from "rxjs";
import { EntidadMapper } from "./entidad.mapper";
import { responseMapper } from "@base/responseMapper";
import { IEntidadEntity } from "./entidad.entity";

export class EntidadImplementationRepository extends EntidadRepository {
  mapper = new EntidadMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getEntidad(id: string): Observable<IApiResponse<IEntidadModel>> {
    return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/Entidad/${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateEntidad(params: IEntidadModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Entidad/${params.id}`, this.mapper.mapTo(params))
  }
}