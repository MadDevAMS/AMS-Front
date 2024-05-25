import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import { TablaColComponent } from './tabla-col.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    TablaComponent,
    TablaColComponent
  ],
  imports: [ 
    CommonModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ TablaComponent ],
  providers: [],
})
export class TablaModule {}