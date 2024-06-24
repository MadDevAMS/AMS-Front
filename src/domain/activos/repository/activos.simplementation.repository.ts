import { Observable, map } from 'rxjs';
import { ActivosMapper } from '../mappers/activos.mapper';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { IApiResponse } from '@base/response/response';
import { ActivoRepository } from '@data/activos/repository/activos.repository';
import { IEntidadActivoEntity } from '../entities/activo.entity';
import { IActivoModel } from '@data/activos/models/activo.model';
import { responseMapper } from '@base/response/response.mapper';

export class ActivosImplementationRepository extends ActivoRepository {

  mapper = new  ActivosMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getActivos(): Observable<IApiResponse<IActivoModel>> {
    return this.http.get<IApiResponse<IEntidadActivoEntity>>(`${API_URL}/folder`)
      .pipe(map(responseMapper(this.mapper)))
  }
}