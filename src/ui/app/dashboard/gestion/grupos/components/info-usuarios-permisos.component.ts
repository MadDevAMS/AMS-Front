import { Component, Input } from '@angular/core';
import { GrupoFormAbstract } from '../services/grupo-form-abstract';

@Component({
  selector: 'gestion-info-usuarios-permisos',
  templateUrl: './info-usuarios-permisos.component.html',
})
export class InfoUsuariosPermisosComponent {
  @Input() servicioForm!: GrupoFormAbstract
  @Input() onlyTab!: 'usuarios' | 'permisos'
}
