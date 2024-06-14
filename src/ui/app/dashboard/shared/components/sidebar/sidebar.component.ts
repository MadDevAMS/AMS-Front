import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/auth'])
    localStorage.removeItem('token')
  }
}
