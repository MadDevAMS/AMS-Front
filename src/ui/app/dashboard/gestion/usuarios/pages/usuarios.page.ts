import { Component } from '@angular/core';
import { UsuarioUsecaseService } from '../services/usuario-usecase.service';
import { UsuariosModule } from '../usuarios.module';
import { UsuarioFormService } from '../services/usuario-form.service';

@Component({
  selector: 'usuarios-page',
  imports: [
    UsuariosModule,
  ],
  standalone: true,
  templateUrl: './usuarios.page.html',
})
export class UsuariosPage {
  hide: boolean = false
    
  constructor(
    public servicio: UsuarioUsecaseService,
    public servicioForm: UsuarioFormService
  ) { }
}