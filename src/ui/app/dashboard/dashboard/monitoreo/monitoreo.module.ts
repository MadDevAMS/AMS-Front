import { NgModule } from '@angular/core';
import { TablaComponent } from './tabla/tabla.component';
import { SharedModule } from '../shared/shared.module';

const commonModules = [
  SharedModule

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
})
export class MonitoreoModule { }

