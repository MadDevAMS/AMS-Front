import { NgModule } from '@angular/core';
import { TablaComponent } from './tabla/tabla.component';
import { SharedModule } from '../shared/shared.module';
import { PuntoTendenciaComponent } from './components/punto-tendencia.componen';

const commonModules = [
  SharedModule

]
const declarations = [
  TablaComponent,
  PuntoTendenciaComponent
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
})
export class MonitoreoModule { }

