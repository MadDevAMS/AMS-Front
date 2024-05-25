import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRepository } from '@data/register/repository/register.repository';
import { RegisterImplementationRepository } from './repository/register.implementation.repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
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