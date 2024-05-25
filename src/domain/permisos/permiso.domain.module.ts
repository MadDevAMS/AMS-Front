import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisoImplementationRepository } from './permiso.implementation.repository';
import { PermisoRepository } from '../../data/permisos/repository/permiso.repository';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [
    {
      provide: PermisoRepository,
      useClass: PermisoImplementationRepository
    }
  ],
})
export class PermisoDomainModule {}