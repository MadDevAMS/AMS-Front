import { NgModule } from '@angular/core';
import { RegisterUsuarioEntidadUsecase } from './usecases/register-usuario-entidad.usecase';
import { RegisterRepository } from './repository/register.repository';
import { RegisterDomainModule } from '@domain/register/register.domain.module';

@NgModule({
  declarations: [],
  imports: [ RegisterDomainModule ],
  exports: [],
  providers: [
    { 
      provide: RegisterUsuarioEntidadUsecase,
      useFactory: (registerRepo: RegisterRepository) => new RegisterUsuarioEntidadUsecase(registerRepo),
      deps: [RegisterRepository]
    },
  ],
})
export class RegisterDataModule {}