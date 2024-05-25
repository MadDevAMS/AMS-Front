import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { GrupoImplementationRepository } from './grupo.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    {
      provide: GrupoRepository,
      useClass: GrupoImplementationRepository
    }
  ],
})
export class GrupoDomainModule {}