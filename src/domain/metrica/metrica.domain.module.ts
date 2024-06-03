import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MetricaRepository } from '@data/metrica/repository/metrica.repository';
import { MetricaImplementationRepository } from './maquina.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: MetricaRepository,
      useFactory: (httpClient: HttpClient) => new MetricaImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class MetricaDomainModule {}