import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsecase } from './usecases/login.usecase';
import { LoginRepository } from './repository/login.repository';
import { LoginDomainModule } from '@domain/login/login.domain.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, LoginDomainModule ],
  exports: [],
  providers: [
    { 
      provide: LoginUsecase,
      useFactory: (loginRepo: LoginRepository) => new LoginUsecase(loginRepo),
      deps: [LoginRepository]
    },
  ],
})
export class LoginDataModule {}