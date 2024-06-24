import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { PuntoRepository } from "../repository/punto.repository";

@Injectable({
  providedIn: 'platform'
})
export class DeletePuntoUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private puntoRepository: PuntoRepository) {}

  execute(id: number): Observable<IApiResponse<void>> {
    return this.puntoRepository.deletePunto(id);
  }
}