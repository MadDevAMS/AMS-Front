import { NgModule } from '@angular/core';
import { PermisoImplementationRepository } from './permiso.implementation.repository';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';

@NgModule({
  declarations: [],
  exports: [],
  providers: [
    {
      provide: PermisoRepository,
      useClass: PermisoImplementationRepository
    }
  ],
})
export class PermisoDomainModule {}