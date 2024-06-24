import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TablaComponent } from './tabla/tabla.component';

const commonModules = [
  SharedModule
]
const declarations = [
  TablaComponent
]
@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...commonModules,
    ...declarations
  ]
})
export class ReporteModule { }
