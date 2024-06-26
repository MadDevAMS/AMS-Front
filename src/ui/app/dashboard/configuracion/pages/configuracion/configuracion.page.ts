import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.css']
})
export class ConfiguracionPage {
  constructor(private router: Router) {}

  redirectToAuth() {
    this.router.navigate(['/auth']);
  }

  toggleTheme() {
    console.log('Tema cambiado');
  }

  openUserConfig() {
    console.log('Configuración del usuario abierta');
  }

  viewAccountInfo() {
    console.log('Información de la cuenta vista');
  }

  changePassword() {
    console.log('Contraseña cambiada');
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.removeItem('token');
  }

  deleteAccount() {
    console.log('Cuenta eliminada');
  }
}
