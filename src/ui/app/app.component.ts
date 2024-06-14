import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioDataModule } from '@data/usuarios/usuario.data.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioDataModule],
  templateUrl: './app.component.html'
})
export class AppComponent {}