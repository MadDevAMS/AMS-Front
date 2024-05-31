import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivoRepository } from '@data/activos/repository/activos.repository';
import { ActivosImplementationRepository } from './repository/activos.simplementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: ActivoRepository,
      useFactory: (httpClient: HttpClient) => new ActivosImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class ActivosDomainModule {}