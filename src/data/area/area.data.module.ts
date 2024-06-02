import { NgModule } from '@angular/core';
import { GetAreaUsecase } from './usecases/get-area.usecase';
import { AreaRepository } from './repository/area.repository';
import { UpdateAreaUsecase } from './usecases/update-area.usecase';
import { AreaDomainModule } from '@domain/area/area.domain.module';
import { CreateAreaUsecase } from './usecases/create-area.usecase';

@NgModule({
  declarations: [],
  imports: [ AreaDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAreaUsecase,
      useFactory: (areaRepo: AreaRepository) => new GetAreaUsecase(areaRepo),
      deps: [AreaRepository]
    },
    { 
      provide: UpdateAreaUsecase,
      useFactory: (areaRepo: AreaRepository) => new UpdateAreaUsecase(areaRepo),
      deps: [AreaRepository]
    },
    { 
      provide: CreateAreaUsecase,
      useFactory: (areaRepo: AreaRepository) => new CreateAreaUsecase(areaRepo),
      deps: [AreaRepository]
    },
  ],
})
export class AreaDataModule {}