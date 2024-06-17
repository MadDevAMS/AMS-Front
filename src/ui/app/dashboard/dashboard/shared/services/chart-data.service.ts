import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAceleracionRmsUsecase } from '@data/charts/dashboard/usecases/get-aceleracion-rms.usecase';
import { GetTemperaturaUsecase } from '@data/charts/dashboard/usecases/get-temperatura.usecase';
import { GetEspectroVibracionUsecase } from '@data/charts/dashboard/usecases/get-espectro-vibracion.usecase';
import { IApiResponse } from '@base/response/response';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {

  constructor(
    private getAceleracionUsecase: GetAceleracionRmsUsecase,
    private getTemperaturaUsecase: GetTemperaturaUsecase,
    private getEspectroVibracionUsecase: GetEspectroVibracionUsecase,
  ){}

  uploadRMSFile(file:File):Observable<IApiResponse<any>>{
    const formData = new FormData();
    formData.append('file',file);
    return this.getAceleracionUsecase.execute(formData);
  }

  uploadTemperatureFile(file:File):Observable<IApiResponse<any>>{
    const formData = new FormData();
    formData.append('file',file);
    return this.getTemperaturaUsecase.execute(formData);
  }

  uploadVelocidadFile(file:File):Observable<IApiResponse<any>>{
    const formData = new FormData();
    formData.append('file',file);
    return this.getEspectroVibracionUsecase.execute(formData);
  }
}
