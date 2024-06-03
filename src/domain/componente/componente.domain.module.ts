import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponenteImplementationRepository } from './componente.implementation.repository';
import { ComponenteRepository } from '@data/componente/repository/componente.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: ComponenteRepository,
      useFactory: (httpClient: HttpClient) => new ComponenteImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class ComponenteDomainModule {}