import { NgModule } from '@angular/core';
import { UsuarioRepository } from '../../data/usuarios/repository/usuario.repository';
import { UsuarioImplementationRepository } from './usuario.implementation.repository';

@NgModule({
  declarations: [],
  exports: [],
  providers: [
    {
      provide: UsuarioRepository,
      useClass: UsuarioImplementationRepository
    }
  ],
})
export class UsuarioDomainModule {}