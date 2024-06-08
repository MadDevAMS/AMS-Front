import { NgModule } from '@angular/core';
import { RegisterRepository } from '@data/register/repository/register.repository';
import { RegisterImplementationRepository } from './repository/register.implementation.repository';
import { HttpClient } from '@angular/common/http';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: RegisterRepository,
      useFactory: (httpClient: HttpClient) => new RegisterImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class RegisterDomainModule {}