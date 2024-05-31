import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArbolComponent } from './components/arbol/arbol.component';
import { ArbolItemComponent } from './components/arbol/arbol-item.component';
import { ActivosDataModule } from '@data/activos/activos.data.module';
import { ActivosUsecaseService } from './services/activos-usecase.service';
import { ActivosFormService } from './services/activos-form.service';
import { ComponenteFormComponent } from './components/form/componente-form.component';
import { EntidadFormComponent } from './components/form/entidad-form.component';
import { FolderFormComponent } from './components/form/folder-form.component';
import { MaquinaFormComponent } from './components/form/maquina-form.component';
import { PuntoFormComponent } from './components/form/punto-form.component';
import { ActivosFormUsecaseService } from './services/activos-form-usecase.service';
import { EntidadDataModule } from '@data/entidad/entidad.data.module';
import { MaquinaDataModule } from '@data/maquina/maquina.data.module';
import { PuntoDataModule } from '@data/punto/punto.data.module';
import { ComponenteDataModule } from '@data/componente/componente.data.module';
import { ChipComponent } from './components/chip/chip.component';
import { incidenciaComponent } from './components/incidencias/incidencia.component';
import { InicidenciasListComponent } from './components/incidencias/incidencias-list.component';
import { FormsModule } from '@angular/forms';

const declarations = [
  ArbolComponent, 
  ArbolItemComponent,
  ComponenteFormComponent,
  EntidadFormComponent,
  FolderFormComponent,
  MaquinaFormComponent,
  PuntoFormComponent,
  incidenciaComponent,
  InicidenciasListComponent,
  ChipComponent
]

const commonModules = [
  SharedModule,
  ActivosDataModule,
  EntidadDataModule,
  MaquinaDataModule,
  PuntoDataModule,
  ComponenteDataModule
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...commonModules,
    ...declarations
  ],
  providers: [
    ActivosUsecaseService,
    ActivosFormService,
    ActivosFormUsecaseService
  ],
})
export class ActivosModule { }