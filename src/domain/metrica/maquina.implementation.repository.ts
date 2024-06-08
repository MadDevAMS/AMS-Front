import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { responseMapper } from "@base/response/response.mapper";
import { Observable, map } from "rxjs";
import { IMetricaEntity } from "./metrica.entity";
import { MetricaRepository } from "@data/metrica/repository/metrica.repository";
import { MetricaMapper } from "./maquina.mapper";
import { IMetricaModel } from "@data/metrica/models/metrica.model";

export class MetricaImplementationRepository extends MetricaRepository {
  mapper = new MetricaMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getMetrica(id: string): Observable<IApiResponse<IMetricaModel>> {
    return this.http.get<IApiResponse<IMetricaEntity>>(`${API_URL}/Metrica/${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateMetrica(params: IMetricaModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Metrica/${params.id}`, this.mapper.mapTo(params))
  }

  override createMetrica(params: IMetricaModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/Metrica`, this.mapper.mapTo(params))
  }
}