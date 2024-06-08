import { NgModule } from '@angular/core';
import { PermisoImplementationRepository } from './permiso.implementation.repository';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: PermisoRepository,
      useFactory: (httpClient: HttpClient) => new PermisoImplementationRepository(httpClient),
      deps: [HttpClient]
    }
  ],
})
export class PermisoDomainModule {}