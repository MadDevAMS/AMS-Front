import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';

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
export class DahsboardLayout {
  constructor(public sidebarService: SidebarService) {}

  handleOpen() {
    this.sidebarService.toggleOpen()
  }
}
