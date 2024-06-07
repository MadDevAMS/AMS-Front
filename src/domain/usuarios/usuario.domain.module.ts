import { NgModule } from '@angular/core';
import { UsuarioRepository } from '../../data/usuarios/repository/usuario.repository';
import { UsuarioImplementationRepository } from './usuario.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [ ],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: UsuarioRepository,
      useClass: UsuarioImplementationRepository
    }
  ],
})
export class UsuarioDomainModule {}