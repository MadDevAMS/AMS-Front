import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PuntoImplementationRepository } from './punto.implementation.repository';
import { PuntoRepository } from '@data/punto/repository/punto.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
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