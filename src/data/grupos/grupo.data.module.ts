import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllGruposUsecase } from './usecases/get-all-grupos.usecase';
import { GrupoRepository } from './repository/grupo.repository';
import { GrupoDomainModule } from '../../domain/grupos/grupo.domain.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, GrupoDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAllGruposUsecase,
      useFactory: (usuarioRepo: GrupoRepository) => new GetAllGruposUsecase(usuarioRepo),
      deps: [GrupoRepository]
    },
  ],
})
export class GrupoDataModule {}