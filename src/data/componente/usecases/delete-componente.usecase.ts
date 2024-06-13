import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { ComponenteRepository } from "../repository/componente.repository";

@Injectable({
  providedIn: 'platform'
})
export class DeleteComponenteUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private componenteRepository: ComponenteRepository) {}

  execute(id: number): Observable<IApiResponse<void>> {
    return this.componenteRepository.deleteComponente(id);
  }
}