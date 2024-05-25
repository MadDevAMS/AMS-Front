import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { SharedModule } from '../shared/shared.module';
import { GrupoUsecaseService } from './services/grupo-usecase.service';
import { GrupoFormService } from './services/grupo-form.service';
import { PermisoDataModule } from '@data/permisos/permiso.data.module';
import { TablaUsuariosComponent } from './components/tabla/tabla-usuarios.component';

const commonModules = [
  SharedModule,

  UsuarioDataModule,
  GrupoDataModule,
  PermisoDataModule
]

const declarations = [
  TablaComponent,
  TablaUsuariosComponent
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ 
    GrupoUsecaseService,
    GrupoFormService
  ],
})
export class GruposModule { }