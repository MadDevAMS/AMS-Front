import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaLayout } from './layouts/tabla.layout';
import { TablaColComponent } from './components/tabla-col.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { CardLayout } from '@ui/shared/layouts/card.layout';


const components = [
  TablaLayout,
  TablaColComponent
]

const common = [
  CommonModule,
  MatIconModule,
  ReactiveFormsModule,
  FormsModule,
  
  MaterialModule,
  
  CardLayout,
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
export class SharedModule { }