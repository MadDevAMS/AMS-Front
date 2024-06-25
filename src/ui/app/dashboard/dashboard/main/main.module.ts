import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CardInfoComponent } from './components/card-info.component';
import { ActivosDataModule } from '@data/activos/activos.data.module';

const declarations = [
  CardInfoComponent,
]

const commonModules = [
  SharedModule,

  ActivosDataModule
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