import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivosDomainModule } from '@domain/activos/activos.domain.module';
import { GetActivosUsecase } from './usecases/get-activos.usecase';
import { ActivoRepository } from './repository/activos.repository';

@NgModule({
  declarations: [],
  imports: [ CommonModule, ActivosDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetActivosUsecase,
      useFactory: (activosRepo: ActivoRepository) => new GetActivosUsecase(activosRepo),
      deps: [ActivoRepository]
    },
  ],
})
export class ActivosDataModule {}