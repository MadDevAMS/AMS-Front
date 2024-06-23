import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '@ui/shared/services/user.service';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [
    RouterLink,
    
    MatIcon,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  TITULOS: Record<string, string> = {
    '/dashboard/gestion/usuarios/create': 'Crear usuario'
  }

  constructor(
    private sidebarService: SidebarService, 
    private router: Router,
    public userService: UserService,
  ) {}

  getTitulo() {
    return this.TITULOS[this.router.url]
  }

  handleOpen() {
    this.sidebarService.toggleOpen()
  }

  logout() {
    this.router.navigate(['/auth'])
    localStorage.removeItem('token')
  }
}
