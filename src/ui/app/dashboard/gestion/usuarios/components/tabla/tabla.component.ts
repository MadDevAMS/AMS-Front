import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { UsuarioFormService } from '../../services/usuario-form.service';

@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  @Input() usuarios: IUsuarioModel[] = [];

  busqueda: string = "";

  constructor(
    public serviceForm: UsuarioFormService
  ) { }

  seleccionar(usuario: IUsuarioModel) {
    this.serviceForm.toggleSeleccionar(usuario);
  }

  filtrarUsuarios() {
    return this.usuarios.filter(usuario =>
      Object.values(usuario).some(value =>
        value?.toString().toLowerCase().includes(this.busqueda.toLowerCase())
      )
    );
  }
}