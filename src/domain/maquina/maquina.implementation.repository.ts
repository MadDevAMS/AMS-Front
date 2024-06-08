import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { responseMapper } from "@base/response/response.mapper";
import { MaquinaRepository } from "@data/maquina/repository/maquina.repository";
import { MaquinaMapper } from "./maquina.mapper";
import { IMaquinaModel } from "@data/maquina/models/maquina.model";
import { Observable, map } from "rxjs";
import { IMaquinaEntity } from "./maquina.entity";

export class MaquinaImplementationRepository extends MaquinaRepository {
  mapper = new MaquinaMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getMaquina(id: string): Observable<IApiResponse<IMaquinaModel>> {
    return this.http.get<IApiResponse<IMaquinaEntity>>(`${API_URL}/Maquina/${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateMaquina(params: IMaquinaModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/Maquina/${params.id}`, this.mapper.mapTo(params))
  }

  override createMaquina(params: IMaquinaModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/Maquina`, this.mapper.mapTo(params))
  }
}