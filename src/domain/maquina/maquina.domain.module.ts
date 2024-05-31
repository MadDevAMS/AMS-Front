import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaquinaImplementationRepository } from './maquina.implementation.repository';
import { MaquinaRepository } from '@data/maquina/repository/maquina.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
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