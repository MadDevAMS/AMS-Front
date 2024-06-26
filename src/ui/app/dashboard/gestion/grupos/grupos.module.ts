import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { SharedModule } from '../shared/shared.module';
import { GrupoUsecaseService } from './services/grupo-usecase.service';
import { GrupoFormService } from './services/grupo-form.service';
import { PermisoDataModule } from '@data/permisos/permiso.data.module';
import { TablaUsuariosComponent } from './components/tabla/tabla-usuarios.component';
import { InfoUsuariosPermisosComponent } from './components/info-usuarios-permisos.component';
import { TablaPermisosComponent } from './components/tabla/tabla-permisos.component';
import { GruposFilterPermisosDrawer } from './components/drawer/grupos-filter-permisos-drawer.component';
import { GruposFilterUsuariosDrawer } from './components/drawer/grupos-filter-usuarios-drawer.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TablesPaginatorIntl } from '@ui/dashboard/shared/services/pagination.service';
import { GruposFilterGruposDrawer } from './components/drawer/filter-grupos-drawer.component';
import { GrupoConfigService } from './services/grupo-config.service';

const commonModules = [
  SharedModule,

  UsuarioDataModule,
  GrupoDataModule,
  PermisoDataModule
]

const declarations = [
  TablaComponent,
  TablaUsuariosComponent,
  TablaPermisosComponent,
  GruposFilterGruposDrawer,
  GruposFilterPermisosDrawer,
  GruposFilterUsuariosDrawer,
  InfoUsuariosPermisosComponent
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ 
    {provide: MatPaginatorIntl, useClass: TablesPaginatorIntl},
    GrupoUsecaseService,
    GrupoFormService,
    GrupoConfigService
  ],
})
export class GruposModule { }