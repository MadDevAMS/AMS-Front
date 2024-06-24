import { NgModule } from '@angular/core';
import { UsuarioRepository } from './repository/usuario.repository';
import { GetAllUsuariosUsecase } from './usecases/get-all-usuarios.usecase';
import { UsuarioDomainModule } from '../../domain/usuarios/usuario.domain.module';
import { GetUsuarioByIdUsecase } from './usecases/get-usuario-by-id.usecase';
import { CreateUsuarioUsecase } from './usecases/create-usuario.usecase';
import { UpdateUsuarioUsecase } from './usecases/update-usuario.usecase';
import { DeleteUsuarioUsecase } from './usecases/delete-usuario.usecase';
import { GetAuthUserUsecase } from './usecases/get-auth-user.usecase';

@NgModule({
  declarations: [],
  imports: [ UsuarioDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAllUsuariosUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new GetAllUsuariosUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
    { 
      provide: GetUsuarioByIdUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new GetUsuarioByIdUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
    { 
      provide: GetAuthUserUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new GetAuthUserUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
    { 
      provide: DeleteUsuarioUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new DeleteUsuarioUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
    { 
      provide: CreateUsuarioUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new CreateUsuarioUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
    { 
      provide: UpdateUsuarioUsecase,
      useFactory: (usuarioRepo: UsuarioRepository) => new UpdateUsuarioUsecase(usuarioRepo),
      deps: [UsuarioRepository]
    },
  ],
})
export class UsuarioDataModule {}