import { NgModule } from '@angular/core';
import { GetMaquinaUsecase } from './usecases/get-maquina.usecase';
import { MaquinaRepository } from './repository/maquina.repository';
import { MaquinaDomainModule } from '@domain/maquina/maquina.domain.module';
import { UpdateMaquinaUsecase } from './usecases/update-maquina.usecase';
import { CreateMaquinaUsecase } from './usecases/create-maquina.usecase';
import { DeleteMaquinaUsecase } from './usecases/delete-maquina.usecase';

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
    { 
      provide: CreateMaquinaUsecase,
      useFactory: (maquinaRepo: MaquinaRepository) => new CreateMaquinaUsecase(maquinaRepo),
      deps: [MaquinaRepository]
    },
    { 
      provide: DeleteMaquinaUsecase,
      useFactory: (maquinaRepo: MaquinaRepository) => new DeleteMaquinaUsecase(maquinaRepo),
      deps: [MaquinaRepository]
    },
  ],
})
export class MaquinaDataModule {}