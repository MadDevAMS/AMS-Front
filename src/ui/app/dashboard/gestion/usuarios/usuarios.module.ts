import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { UsuarioUsecaseService } from './services/usuario-usecase.service';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormService } from './services/usuario-form.service';

const commonModules = [
  SharedModule,

  UsuarioDataModule,
  GrupoDataModule
]

const declarations = [
  TablaComponent,
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
    UsuarioFormService
  ],
})
export class UsuariosModule { }