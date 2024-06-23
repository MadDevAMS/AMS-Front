import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    SidebarModule,
    HeaderComponent
  ],
  templateUrl: './dashboard.layout.html',
})
export class DahsboardLayout implements AfterViewInit {
  @ViewChild('drawerContent', { read: ViewContainerRef, static: true }) drawerContent!: ViewContainerRef;

  constructor(
    public sidebarService: SidebarService,
    public drawerService: DrawerService,
  ) { }

  ngAfterViewInit(): void {
    this.drawerService.setViewContainerRef(this.drawerContent)
  }

  handleSidebar() {
    this.sidebarService.toggleOpen()
  }

  handleDrawer() {
    this.drawerService.close()
  }
}
