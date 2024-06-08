import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntidadRepository } from '@data/entidad/repository/entidad.repository';
import { EntidadImplementationRepository } from './entidad.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: EntidadRepository,
      useFactory: (httpClient: HttpClient) => new EntidadImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class EntidadDomainModule {}