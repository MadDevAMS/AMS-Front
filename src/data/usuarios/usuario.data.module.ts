import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { GetAllUsuariosUsecase } from './usecases/get-all-usuarios.usecase';
import { UsuarioDomainModule } from '../../domain/usuarios/usuario.domain.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, UsuarioDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAllUsuariosUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new GetAllUsuariosUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
  ],
})
export class UsuarioDataModule {}