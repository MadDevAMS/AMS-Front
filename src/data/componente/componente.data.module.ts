import { NgModule } from '@angular/core';
import { GetComponenteUsecase } from './usecases/get-componente.usecase';
import { ComponenteRepository } from './repository/componente.repository';
import { ComponenteDomainModule } from '@domain/componente/componente.domain.module';
import { UpdateComponenteUsecase } from './usecases/update-componente.usecase';
import { CreateComponenteUsecase } from './usecases/create-componente.usecase';
import { DeleteComponenteUsecase } from './usecases/delete-componente.usecase';

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
    { 
      provide: CreateComponenteUsecase,
      useFactory: (componenteRepo: ComponenteRepository) => new CreateComponenteUsecase(componenteRepo),
      deps: [ComponenteRepository]
    },
    { 
      provide: DeleteComponenteUsecase,
      useFactory: (componenteRepo: ComponenteRepository) => new DeleteComponenteUsecase(componenteRepo),
      deps: [ComponenteRepository]
    },
  ],
})
export class ComponenteDataModule {}