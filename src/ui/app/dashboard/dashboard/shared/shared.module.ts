import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';
import { InicidenciasListComponent } from './components/incidencias/incidencias-list.component';
import { incidenciaComponent } from './components/incidencias/incidencia.component';

const components = [
  incidenciaComponent,
  InicidenciasListComponent,
]

const common = [
  MaterialModule,
  SharedGlobalModule,
  CdkTreeModule
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