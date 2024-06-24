import { NgModule } from '@angular/core';
import { GetAceleracionRmsUsecase } from './usecases/get-aceleracion-rms.usecase';
import { ChartDashboardRepository } from './repository/chart-dashboard.repository';
import { GetTemperaturaUsecase } from './usecases/get-temperatura.usecase';
import { GetEspectroVibracionUsecase } from './usecases/get-espectro-vibracion.usecase';
import { ChartDashboardDomainModule } from '@domain/charts/dashboard/chart-dashboard.domain.module';

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
  ],
})
export class ChartDashboardDataModule {}