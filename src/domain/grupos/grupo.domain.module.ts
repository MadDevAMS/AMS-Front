import { NgModule } from '@angular/core';
import { GrupoRepository } from '../../data/grupos/repository/grupo.repository';
import { GrupoImplementationRepository } from './grupo.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: GrupoRepository,
      useFactory: (httpClient: HttpClient) => new GrupoImplementationRepository(httpClient),
      deps: [HttpClient]
    }
  ],
})
export class GrupoDomainModule {}