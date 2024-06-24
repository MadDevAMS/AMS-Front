import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CardInfoComponent } from './components/card-info.component';

const declarations = [
  CardInfoComponent,
]

const commonModules = [
  SharedModule,
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...commonModules,
    ...declarations
  ],
  providers: [],
})
export class MainModule { }