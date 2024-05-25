import { Component, Input } from '@angular/core';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GrupoFormService } from '../../services/grupo-form.service';

@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
})
export class TablaUsuariosComponent {
  @Input() usuarios: IUsuarioModel[] = [];

  busqueda: string = "";

  constructor(
    public serviceForm: GrupoFormService
  ) { }

  seleccionar(usuario: IUsuarioModel) {
    this.serviceForm.toggleSeleccionarUsuario(usuario);
  }

  filtrarUsuarios() {
    return this.usuarios.filter(usuario =>
      Object.values(usuario).some(value =>
        value?.toString().toLowerCase().includes(this.busqueda.toLowerCase())
      )
    );
  }
}