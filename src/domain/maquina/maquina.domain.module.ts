import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaquinaImplementationRepository } from './maquina.implementation.repository';
import { MaquinaRepository } from '@data/maquina/repository/maquina.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: MaquinaRepository,
      useFactory: (httpClient: HttpClient) => new MaquinaImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class MaquinaDomainModule {}