import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EntidadRepository } from '@data/entidad/repository/entidad.repository';
import { EntidadImplementationRepository } from './entidad.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
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