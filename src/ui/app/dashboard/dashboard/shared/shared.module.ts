import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { InicidenciasListComponent } from './components/incidencias/incidencias-list.component';
import { incidenciaComponent } from './components/incidencias/incidencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaLayout } from './layouts/tabla.layout';
import { TablaColComponent } from './components/tabla-col.component';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';

const components = [
  incidenciaComponent,
  InicidenciasListComponent,
  TablaLayout,
  TablaColComponent
]

const common = [
  MaterialModule,
  SharedGlobalModule,
  CdkTreeModule,
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  declarations: components,
  imports: common,
  exports: [
    ...common,
    ...components
  ],
  providers: [],
})
export class SharedModule {}