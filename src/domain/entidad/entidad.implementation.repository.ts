import { HttpClient } from "@angular/common/http";
import { API_URL } from "@base/environment";
import { IApiResponse } from "@base/response";
import { IEntidadModel } from "@data/entidad/models/entidad.model";
import { EntidadRepository } from "@data/entidad/repository/entidad.repository";
import { Observable, map, of } from "rxjs";
import { EntidadMapper } from "./entidad.mapper";
import { responseMapper } from "@base/responseMapper";
import { IEntidadEntity } from "./entidad.entity";

export class EntidadImplementationRepository extends EntidadRepository {

  responseExample: IApiResponse<IEntidadModel> = {
    data: {
      id: 'entidad1',
      email: 'entidad@gmail.com',
      imagen: 'https://imgs.search.brave.com/r9zdxpzCaUfANfmFJDkI-X9AVCMoBb67IeB-48bbjiQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA1/L0dvb2dsZS1QaG90/b3MtbG9nby00MDB4/NDAwLnBuZw',
      nombre: 'Entidad 1',
      razonSocial: 'SA',
      ruc: '29183746123',
      telefono: '957806122'
    },
    errors: null,
    message: 'Entidad recuperada con exito',
    status: 200,
    totalRecords: 1,
  }

  mapper = new EntidadMapper()

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getEntidad(id: string): Observable<IApiResponse<IEntidadModel>> {
    return of(this.responseExample)
      .pipe(map(responseMapper(this.mapper)))
    // return this.http.get<IApiResponse<IEntidadEntity>>(`${API_URL}/Entidad/${id}`)
    //   .pipe(map(responseMapper(this.mapper)))
  }

  override updateEntidad(params: IEntidadModel): Observable<IApiResponse<void>> {
    console.log(params);
    return this.http.put<IApiResponse<void>>(`${API_URL}/Entidad/${params.id}`, this.mapper.mapTo(params))
  }
}