import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetricaRepository } from '@data/metrica/repository/metrica.repository';
import { MetricaImplementationRepository } from './metrica.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
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