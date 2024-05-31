import { NgModule } from '@angular/core';
import { GetPuntoUsecase } from './usecases/get-punto.usecase';
import { PuntoRepository } from './repository/punto.repository';
import { UpdatePuntoUsecase } from './usecases/update-punto.usecase';
import { PuntoDomainModule } from '@domain/punto/punto.domain.module';

@NgModule({
  declarations: [],
  imports: [ PuntoDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetPuntoUsecase,
      useFactory: (puntoRepo: PuntoRepository) => new GetPuntoUsecase(puntoRepo),
      deps: [PuntoRepository]
    },
    { 
      provide: UpdatePuntoUsecase,
      useFactory: (puntoRepo: PuntoRepository) => new UpdatePuntoUsecase(puntoRepo),
      deps: [PuntoRepository]
    },
  ],
})
export class PuntoDataModule {}