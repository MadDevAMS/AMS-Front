import { Injectable } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IApiResponse } from "@base/response/response";
import { Observable } from "rxjs";
import { MaquinaRepository } from "../repository/maquina.repository";

@Injectable({
  providedIn: 'platform'
})
export class DeleteMaquinaUsecase implements UseCase<number, IApiResponse<void>> {
  constructor(private maquinaRepository: MaquinaRepository) {}

  execute(id: number): Observable<IApiResponse<void>> {
    return this.maquinaRepository.deleteMaquina(id);
  }
}