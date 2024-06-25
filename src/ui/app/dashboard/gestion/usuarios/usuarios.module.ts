import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { UsuarioUsecaseService } from './services/usuario-usecase.service';
import { SharedModule } from '../shared/shared.module';
import { TablaGruposComponent } from './components/tabla/tabla-grupos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsuariosFilterGruposDrawer } from './components/drawer/usuarios-filter-grupos-drawer.component';
import { UsuariosFilterUsuariosDrawer } from './components/drawer/usuarios-filter-usuarios-drawer.component';
import { InfoGruposPermisosComponent } from './components/info-grupos-permisos.component';
import { ChipInfoGrupoComponent } from './components/chip-info-grupo.component';
import { TablesPaginatorIntl } from '@ui/dashboard/shared/services/pagination.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

const commonModules = [
  SharedModule,

  UsuarioDataModule,
  GrupoDataModule,
  MatSidenavModule
]

const declarations = [
  TablaComponent,
  TablaGruposComponent,
  UsuariosFilterGruposDrawer,
  UsuariosFilterUsuariosDrawer,
  InfoGruposPermisosComponent,
  ChipInfoGrupoComponent
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
    UsuarioUsecaseService,
  ],
})
export class UsuariosModule { }