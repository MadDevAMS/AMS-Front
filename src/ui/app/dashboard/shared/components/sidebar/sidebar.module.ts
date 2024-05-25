import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarGroupComponent } from './sidebar-group.component';
import { SidebarItemComponent } from './sidebar-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarGroupComponent,
    SidebarItemComponent
  ],
  imports: [ 
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
    MatIcon, 
    MatRippleModule,
    MatButtonModule
  ],
  exports: [ SidebarComponent ],
  providers: [],
})
export class SidebarModule {}