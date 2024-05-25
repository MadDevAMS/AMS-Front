import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUsuarioEntidadUsecase } from './usecases/register-usuario-entidad.usecase';
import { RegisterRepository } from './repository/register.repository';
import { RegisterDomainModule } from '@domain/register/register.domain.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, RegisterDomainModule ],
  exports: [],
  providers: [
    { 
      provide: RegisterUsuarioEntidadUsecase,
      useFactory: (usuarioRepo: RegisterRepository) => new RegisterUsuarioEntidadUsecase(usuarioRepo),
      deps: [RegisterRepository]
    },
  ],
})
export class RegisterDataModule {}