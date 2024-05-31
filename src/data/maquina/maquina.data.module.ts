import { NgModule } from '@angular/core';
import { GetMaquinaUsecase } from './usecases/get-maquina.usecase';
import { MaquinaRepository } from './repository/maquina.repository';
import { MaquinaDomainModule } from '@domain/maquina/maquina.domain.module';
import { UpdateMaquinaUsecase } from './usecases/update-maquina.usecase';

@NgModule({
  declarations: [],
  imports: [ MaquinaDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetMaquinaUsecase,
      useFactory: (maquinaRepo: MaquinaRepository) => new GetMaquinaUsecase(maquinaRepo),
      deps: [MaquinaRepository]
    },
    { 
      provide: UpdateMaquinaUsecase,
      useFactory: (maquinaRepo: MaquinaRepository) => new UpdateMaquinaUsecase(maquinaRepo),
      deps: [MaquinaRepository]
    },
  ],
})
export class MaquinaDataModule {}