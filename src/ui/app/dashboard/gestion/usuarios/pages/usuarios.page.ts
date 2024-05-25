import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
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