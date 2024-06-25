import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAceleracionRmsUsecase } from '@data/charts/dashboard/usecases/get-aceleracion-rms.usecase';
import { GetTemperaturaUsecase } from '@data/charts/dashboard/usecases/get-temperatura.usecase';
import { GetEspectroVibracionUsecase } from '@data/charts/dashboard/usecases/get-espectro-vibracion.usecase';
import { IApiResponse } from '@base/response/response';
import { GetAceleracionRmsByIdUsecase } from '@data/charts/dashboard/usecases/get-aceleracion-rms-by-id.usecase';
import { GetTemperaturaByIdUsecase } from '@data/charts/dashboard/usecases/get-temperatura-by-id.usecase';
import { GetEspectroVibracionByIdUsecase } from '@data/charts/dashboard/usecases/get-espectro-vibracion-by-id.usecase';
import { GetFilesS3Usecase } from '@data/charts/dashboard/usecases/get-files-s3.usecase';
import { IChartS3FileEntity } from '@domain/charts/dashboard/chart-s3-file.entity';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  filesS3: IChartS3FileEntity[] = []

  constructor(
    private getAceleracionUsecase: GetAceleracionRmsUsecase,
    private getTemperaturaUsecase: GetTemperaturaUsecase,
    private getEspectroVibracionUsecase: GetEspectroVibracionUsecase,
    private getAceleracionByIdUsecase: GetAceleracionRmsByIdUsecase,
    private getTemperaturaByIdUsecase: GetTemperaturaByIdUsecase,
    private getEspectroVibracionByIdUsecase: GetEspectroVibracionByIdUsecase,
    private getFilesS3: GetFilesS3Usecase
  ){
    this.getFilesS3.execute().subscribe({
      next: (res) => {
        this.filesS3 = res.data || []
      },
    })
  }

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

  getRMSFile(key: string):Observable<IApiResponse<any>>{
    return this.getAceleracionByIdUsecase.execute(key);
  }

  getTemperatureFile(key: string):Observable<IApiResponse<any>>{
    return this.getTemperaturaByIdUsecase.execute(key);
  }

  getVelocidadFile(key: string):Observable<IApiResponse<any>>{
    return this.getEspectroVibracionByIdUsecase.execute(key);
  }
}
