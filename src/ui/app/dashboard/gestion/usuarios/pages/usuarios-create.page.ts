import { Component } from '@angular/core';
import { UsuariosModule } from '../usuarios.module';
import { UsuarioFormService } from '../services/usuario-form.service';

@Component({
  selector: 'usuarios-create-page',
  standalone: true,
  imports: [
    UsuariosModule
  ],
  templateUrl: './usuarios-create.page.html',
})
export class UsuariosCreatePage {
  constructor(
    public servicioForm: UsuarioFormService
  ) { }
}
