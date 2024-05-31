import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { responseMapper } from "@base/responseMapper";
import { PuntoRepository } from "@data/punto/repository/punto.repository";
import { PuntoMapper } from "./punto.mapper";
import { IPuntoModel } from "@data/punto/models/punto.model";
import { Observable, map } from "rxjs";
import { IPuntoEntity } from "./punto.entity";

export class PuntoImplementationRepository extends PuntoRepository {
  mapper = new PuntoMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getPunto(id: string): Observable<IApiResponse<IPuntoModel>> {
    return this.http.get<IApiResponse<IPuntoEntity>>(`${API_URL}/Punto/${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updatePunto(params: IPuntoModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Punto/${params.id}`, this.mapper.mapTo(params))
  }
}