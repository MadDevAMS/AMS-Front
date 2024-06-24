import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { UsuarioUsecaseService } from './services/usuario-usecase.service';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormService } from './services/usuario-form.service';
import { TablaGruposComponent } from './components/tabla/tabla-grupos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TablesPaginatorIntl } from './services/pagination.service';
import { UsuarioConfigService } from './services/usuario-config.service';
import { UsuariosFilterGruposDrawer } from './components/drawer/usuarios-filter-grupos-drawer.component';
import { UsuariosFilterUsuariosDrawer } from './components/drawer/usuarios-filter-usuarios-drawer.component';

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
  UsuariosFilterUsuariosDrawer
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ 
    TablesPaginatorIntl,
    UsuarioUsecaseService,
  ],
})
export class UsuariosModule { }