import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginRepository } from '@data/login/repository/login.repository';
import { LoginImplementationRepository } from './repository/login.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
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