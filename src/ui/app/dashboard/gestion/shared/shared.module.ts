import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaLayout } from './layouts/tabla.layout';
import { TablaColComponent } from './components/tabla-col.component';
import { MatIconModule } from '@angular/material/icon';

const common = [
  TablaLayout,
  TablaColComponent
]

@NgModule({
  declarations: common,
  imports: [ 
    CommonModule,
    MatIconModule
  ],
  exports: common,
  providers: [],
})
export class SharedModule { }