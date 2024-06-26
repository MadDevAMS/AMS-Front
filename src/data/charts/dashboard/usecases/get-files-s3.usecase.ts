import { Injectable } from '@angular/core';
import { IApiResponse } from '@base/response/response';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { ChartDashboardRepository } from '../repository/chart-dashboard.repository';
import { IChartS3FileEntity } from '@domain/charts/dashboard/chart-s3-file.entity';

@Injectable({
  providedIn: 'platform'
})
export class GetFilesS3Usecase implements UseCase<void, IApiResponse<IChartS3FileEntity[]>> {
  constructor(private chartDashboardRepository: ChartDashboardRepository){ }

  execute(): Observable<IApiResponse<IChartS3FileEntity[]>> {
    return this.chartDashboardRepository.getFilesS3()
  }
}