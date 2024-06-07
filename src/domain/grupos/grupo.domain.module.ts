import { NgModule } from '@angular/core';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { GrupoImplementationRepository } from './grupo.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: GrupoRepository,
      useClass: GrupoImplementationRepository
    }
  ],
})
export class GrupoDomainModule {}