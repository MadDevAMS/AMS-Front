import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { UsuarioUsecaseService } from './services/usuario-usecase.service';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormService } from './services/usuario-form.service';
import { UserService } from '@ui/shared/services/user.service';
import { TablaGruposComponent } from './components/tabla/tabla-grupos.component';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsuariosFilterGruposDrawer } from './components/drawer/usuarios-filter-grupos-drawer.component';

const commonModules = [
  SharedModule,

  UsuarioDataModule,
  GrupoDataModule,
  MatSidenavModule
]

const declarations = [
  TablaComponent,
  TablaGruposComponent,
  UsuariosFilterGruposDrawer
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ 
    UsuarioUsecaseService,
    UsuarioFormService,
    UserService,
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        formFieldAppearance: 'fill'
      } as MatPaginatorDefaultOptions
    }
  ],
})
export class UsuariosModule { }