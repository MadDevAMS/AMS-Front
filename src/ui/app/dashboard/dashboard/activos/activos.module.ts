import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArbolComponent } from './components/arbol/arbol.component';
import { ArbolItemComponent } from './components/arbol/arbol-item.component';

@NgModule({
  declarations: [ ArbolComponent, ArbolItemComponent ],
  imports: [ 
    SharedModule 
  ],
  exports: [
    SharedModule,
    ArbolComponent,
    ArbolItemComponent
  ],
  providers: [],
})
export class ActivosModule { }