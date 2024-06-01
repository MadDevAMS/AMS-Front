import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArbolComponent } from './components/arbol/arbol.component';
import { ArbolItemComponent } from './components/arbol/arbol-item.component';
import { ActivosDataModule } from '@data/activos/activos.data.module';
import { ActivosUsecaseService } from './services/activos-usecase.service';
import { ActivosFormService } from './services/activos-form.service';
import { ComponenteFormComponent } from './components/form/componente-form.component';
import { EntidadFormComponent } from './components/form/entidad-form.component';
import { FolderProcesoFormComponent } from './components/form/folder-proceso-form.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalActivosModule } from './components/modal/modal.module';
import { ActivosUpdateUsecaseService } from './services/activos-update.usecase.service';
import { FolderAmbienteDataModule } from '@data/folder/folder-ambiente/folder-ambiente.data.module';
import { FolderProcesoDataModule } from '@data/folder/folder-proceso/folder-proceso.data.module';
import { FolderAmbienteFormComponent } from './components/form/folder-ambiente-form.component';

const declarations = [
  ArbolComponent, 
  ArbolItemComponent,
  ComponenteFormComponent,
  EntidadFormComponent,
  FolderProcesoFormComponent,
  FolderAmbienteFormComponent,
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
  ComponenteDataModule,
  PuntoDataModule,
  FolderAmbienteDataModule,
  FolderProcesoDataModule,

  ModalActivosModule,
  FormsModule,
  ReactiveFormsModule
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
    ActivosUpdateUsecaseService,
    ActivosFormService,
    ActivosFormUsecaseService
  ],
})
export class ActivosModule { }