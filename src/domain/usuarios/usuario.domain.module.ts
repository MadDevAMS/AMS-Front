import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRepository } from '../../data/usuarios/repository/usuario.repository';
import { UsuarioImplementationRepository } from './usuario.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    {
      provide: UsuarioRepository,
      useClass: UsuarioImplementationRepository
    }
  ],
})
export class UsuarioDomainModule {}