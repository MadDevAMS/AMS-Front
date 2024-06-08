import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AreaRepository } from '@data/area/repository/area.repository';
import { AreaImplementationRepository } from './area.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: AreaRepository,
      useFactory: (httpClient: HttpClient) => new AreaImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class AreaDomainModule {}