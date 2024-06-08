import { NgModule } from '@angular/core';
import { UsuarioRepository } from '../../data/usuarios/repository/usuario.repository';
import { UsuarioImplementationRepository } from './repository/usuario.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ ],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: UsuarioRepository,
      useFactory: (httpClient: HttpClient) => new UsuarioImplementationRepository(httpClient),
      deps: [HttpClient]
    }
  ],
})
export class UsuarioDomainModule {}