import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponenteImplementationRepository } from './componente.implementation.repository';
import { ComponenteRepository } from '@data/componente/repository/componente.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
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