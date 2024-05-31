import { NgModule } from '@angular/core';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { GrupoImplementationRepository } from './grupo.implementation.repository';

@NgModule({
  declarations: [],
  exports: [],
  providers: [
    {
      provide: GrupoRepository,
      useClass: GrupoImplementationRepository
    }
  ],
})
export class GrupoDomainModule {}