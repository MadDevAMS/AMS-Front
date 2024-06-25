import { Component } from '@angular/core';
import { UsuariosModule } from '../usuarios.module';
import { UsuarioUsecaseService } from '../services/usuario-usecase.service';
import { UsuarioFormService } from '../services/usuario-form.service';
import { IGrupoModel, IGrupoPermisoModel } from '@data/grupos/models/grupo.model';

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
