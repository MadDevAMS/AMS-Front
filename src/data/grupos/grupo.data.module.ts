import { NgModule } from '@angular/core';
import { GetAllGruposUsecase } from './usecases/get-all-grupos.usecase';
import { GrupoRepository } from './repository/grupo.repository';
import { GrupoDomainModule } from '../../domain/grupos/grupo.domain.module';
import { CreateGrupoUsecase } from './usecases/create-grupo.usecase';
import { UpdateGrupoUsecase } from './usecases/update-grupo.usecase';
import { GetGrupoByIdUsecase } from './usecases/get-grupo-by-id.usecase';
import { DeleteGrupoUsecase } from './usecases/delete-grupo.usecase';

@NgModule({
  declarations: [],
  imports: [ GrupoDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAllGruposUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new GetAllGruposUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
    { 
      provide: CreateGrupoUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new CreateGrupoUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
    { 
      provide: UpdateGrupoUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new UpdateGrupoUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
    { 
      provide: DeleteGrupoUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new DeleteGrupoUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
    { 
      provide: GetGrupoByIdUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new GetGrupoByIdUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
  ],
})
export class GrupoDataModule {}