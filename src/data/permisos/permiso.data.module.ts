import { NgModule } from '@angular/core';
import { PermisoDomainModule } from '../../domain/permisos/permiso.domain.module';
import { GetAllPermisosUsecase } from './usecases/get-all-permisos.usecase';
import { PermisoRepository } from './repository/permiso.repository';

@NgModule({
  declarations: [],
  imports: [ PermisoDomainModule ],
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