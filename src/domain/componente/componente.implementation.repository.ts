import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response/response";
import { responseMapper } from "@base/response/response.mapper";
import { ComponenteRepository } from "@data/componente/repository/componente.repository";
import { ComponenteMapper } from "./componente.mapper";
import { IComponenteModel } from "@data/componente/models/componente.model";
import { Observable, map } from "rxjs";
import { IComponenteEntity } from "./componente.entity";

export class ComponenteImplementationRepository extends ComponenteRepository {
  mapper = new ComponenteMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getComponente(id: string): Observable<IApiResponse<IComponenteModel>> {
    return this.http.get<IApiResponse<IComponenteEntity>>(`${API_URL}/componentes?idComponente=${id}`)
      .pipe(map(responseMapper(this.mapper)))
  }

  override updateComponente(params: IComponenteModel): Observable<IApiResponse<void>> {
    return this.http.put<IApiResponse<void>>(`${API_URL}/componentes`, this.mapper.mapTo(params))
  }

  override createComponente(params: IComponenteModel): Observable<IApiResponse<void>> {
    return this.http.post<IApiResponse<void>>(`${API_URL}/componentes`, this.mapper.mapTo(params))
  }

  override deleteComponente(id: number): Observable<IApiResponse<void>> {
    return this.http.delete<IApiResponse<void>>(`${API_URL}/componentes?id=${id}`)
  }
}