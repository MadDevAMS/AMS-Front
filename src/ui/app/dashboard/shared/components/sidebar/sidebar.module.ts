import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarGroupComponent } from './sidebar-group.component';
import { SidebarItemComponent } from './sidebar-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarLinkGroupComponent } from './sidebar-link-group.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarGroupComponent,
    SidebarItemComponent,
    SidebarLinkGroupComponent
  ],
  imports: [ 
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
    MatIcon, 
    MatRippleModule,
    MatButtonModule,
    MatExpansionModule,
    CdkAccordionModule
  ],
  exports: [ SidebarComponent ],
  providers: [],
})
export class SidebarModule { }