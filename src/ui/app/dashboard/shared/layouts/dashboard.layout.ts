import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef, effect, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
import { DrawerService } from '../services/drawer.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    SidebarModule,
    HeaderComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './dashboard.layout.html',
})
export class DahsboardLayout {
  drawerContent = viewChild('drawerContent', { read: ViewContainerRef })

  constructor(
    public sidebarService: SidebarService,
    public drawerService: DrawerService,
  ) {
    effect(() => {
      if (this.drawerContent()) {
        this.drawerService.setViewContainerRef(this.drawerContent()!)
      }
    })
  }

  handleSidebar() {
    this.sidebarService.toggleOpen()
  }

  handleDrawer() {
    this.drawerService.close()
  }
}
