import { NgModule } from '@angular/core';
import { TablaLayout } from './layouts/tabla.layout';
import { TablaColComponent } from './components/tabla-col.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';

const components = [
  TablaLayout,
  TablaColComponent,

]

const common = [
  SharedGlobalModule,
  MaterialModule,

  ReactiveFormsModule,
  FormsModule,
]

@NgModule({
  declarations: components,
  imports: common,
  exports: [
    ...common,
    ...components
  ],
})
export class SharedModule { }