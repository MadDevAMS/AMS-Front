import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRepository } from '@data/login/repository/login.repository';
import { LoginImplementationRepository } from './repository/login.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: LoginRepository,
      useFactory: (httpClient: HttpClient) => new LoginImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class LoginDomainModule {}