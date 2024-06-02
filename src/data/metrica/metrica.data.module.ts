import { NgModule } from '@angular/core';
import { GetMetricaUsecase } from './usecases/get-metrica.usecase';
import { MetricaRepository } from './repository/metrica.repository';
import { UpdateMetricaUsecase } from './usecases/update-metrica.usecase';
import { MetricaDomainModule } from '@domain/metrica/metrica.domain.module';
import { CreateMetricaUsecase } from './usecases/create-metrica.usecase';

@NgModule({
  declarations: [],
  imports: [ MetricaDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetMetricaUsecase,
      useFactory: (metricaRepo: MetricaRepository) => new GetMetricaUsecase(metricaRepo),
      deps: [MetricaRepository]
    },
    { 
      provide: UpdateMetricaUsecase,
      useFactory: (metricaRepo: MetricaRepository) => new UpdateMetricaUsecase(metricaRepo),
      deps: [MetricaRepository]
    },
    { 
      provide: CreateMetricaUsecase,
      useFactory: (metricaRepo: MetricaRepository) => new CreateMetricaUsecase(metricaRepo),
      deps: [MetricaRepository]
    },
  ],
})
export class MetricaDataModule {}