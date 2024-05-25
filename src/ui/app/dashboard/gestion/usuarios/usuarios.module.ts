import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaColComponent } from './components/tabla/tabla-col.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { CardLayout } from '@ui/shared/layouts/card.layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrupoDataModule } from '@data/grupos/grupo.data.module';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { UsuarioUsecaseService } from './services/usuario-usecase.service';

const commonModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  
  MaterialModule,

  CardLayout,

  UsuarioDataModule,
  GrupoDataModule
]

const declarations = [
  TablaColComponent,
  TablaComponent,
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ UsuarioUsecaseService ],
})
export class UsuariosModule { }