import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AreaRepository } from '@data/area/repository/area.repository';
import { AreaImplementationRepository } from './area.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
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