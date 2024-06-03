import { NgModule } from '@angular/core';
import { EntidadDomainModule } from '@domain/entidad/entidad.domain.module';
import { GetEntidadUsecase } from './usecases/get-entidad.usecase';
import { EntidadRepository } from './repository/entidad.repository';
import { UpdateEntidadUsecase } from './usecases/update-entidad.usecase';

@NgModule({
  declarations: [],
  imports: [ EntidadDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetEntidadUsecase,
      useFactory: (entidadRepo: EntidadRepository) => new GetEntidadUsecase(entidadRepo),
      deps: [EntidadRepository]
    },
    { 
      provide: UpdateEntidadUsecase,
      useFactory: (entidadRepo: EntidadRepository) => new UpdateEntidadUsecase(entidadRepo),
      deps: [EntidadRepository]
    },
  ],
})
export class EntidadDataModule {}