import { NgModule } from '@angular/core';
import { GetComponenteUsecase } from './usecases/get-componente.usecase';
import { ComponenteRepository } from './repository/componente.repository';
import { ComponenteDomainModule } from '@domain/componente/componente.domain.module';
import { UpdateComponenteUsecase } from './usecases/update-componente.usecase';

@NgModule({
  declarations: [],
  imports: [ ComponenteDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetComponenteUsecase,
      useFactory: (componenteRepo: ComponenteRepository) => new GetComponenteUsecase(componenteRepo),
      deps: [ComponenteRepository]
    },
    { 
      provide: UpdateComponenteUsecase,
      useFactory: (componenteRepo: ComponenteRepository) => new UpdateComponenteUsecase(componenteRepo),
      deps: [ComponenteRepository]
    },
  ],
})
export class ComponenteDataModule {}