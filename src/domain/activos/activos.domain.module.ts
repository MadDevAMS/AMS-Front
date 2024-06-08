import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivoRepository } from '@data/activos/repository/activos.repository';
import { ActivosImplementationRepository } from './repository/activos.simplementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
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