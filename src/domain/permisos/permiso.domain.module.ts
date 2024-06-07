import { NgModule } from '@angular/core';
import { PermisoImplementationRepository } from './permiso.implementation.repository';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: PermisoRepository,
      useClass: PermisoImplementationRepository
    }
  ],
})
export class PermisoDomainModule {}