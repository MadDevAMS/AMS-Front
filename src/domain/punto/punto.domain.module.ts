import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PuntoImplementationRepository } from './punto.implementation.repository';
import { PuntoRepository } from '@data/punto/repository/punto.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: PuntoRepository,
      useFactory: (httpClient: HttpClient) => new PuntoImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class PuntoDomainModule {}