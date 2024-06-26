import { NgModule } from '@angular/core';
import { GetAceleracionRmsUsecase } from './usecases/get-aceleracion-rms.usecase';
import { ChartDashboardRepository } from './repository/chart-dashboard.repository';
import { GetTemperaturaUsecase } from './usecases/get-temperatura.usecase';
import { GetEspectroVibracionUsecase } from './usecases/get-espectro-vibracion.usecase';
import { ChartDashboardDomainModule } from '@domain/charts/dashboard/chart-dashboard.domain.module';
import { GetAceleracionRmsByIdUsecase } from './usecases/get-aceleracion-rms-by-id.usecase';
import { GetTemperaturaByIdUsecase } from './usecases/get-temperatura-by-id.usecase';
import { GetEspectroVibracionByIdUsecase } from './usecases/get-espectro-vibracion-by-id.usecase';
import { GetFilesS3Usecase } from './usecases/get-files-s3.usecase';

@NgModule({
  declarations: [],
  imports: [ ChartDashboardDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAceleracionRmsUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetAceleracionRmsUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetTemperaturaUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetTemperaturaUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetEspectroVibracionUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetEspectroVibracionUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetAceleracionRmsByIdUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetAceleracionRmsByIdUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetTemperaturaByIdUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetTemperaturaByIdUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetEspectroVibracionByIdUsecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetEspectroVibracionByIdUsecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
    { 
      provide: GetFilesS3Usecase,
      useFactory: (chartDashboardRepository: ChartDashboardRepository) => new GetFilesS3Usecase(chartDashboardRepository),
      deps: [ChartDashboardRepository]
    },
  ],
})
export class ChartDashboardDataModule {}