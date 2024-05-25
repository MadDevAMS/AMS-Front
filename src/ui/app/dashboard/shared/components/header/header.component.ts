import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [
    RouterLink,
    
    MatIcon,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private sidebarService: SidebarService) {}

  handleOpen() {
    this.sidebarService.toggleOpen()
  }
}
