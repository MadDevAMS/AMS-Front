import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisoDomainModule } from '../../domain/permisos/permiso.domain.module';
import { GetAllPermisosUsecase } from './usecases/get-all-permisos.usecase';
import { PermisoRepository } from './repository/permiso.repository';

@NgModule({
  declarations: [],
  imports: [ CommonModule, PermisoDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetAllPermisosUsecase,
      useFactory: (permisoRepo: PermisoRepository) => new GetAllPermisosUsecase(permisoRepo),
      deps: [PermisoRepository]
    },
  ],
})
export class PermisoDataModule {}