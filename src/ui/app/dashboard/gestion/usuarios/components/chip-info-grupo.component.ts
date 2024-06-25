import { Component, Input } from '@angular/core';
import { UsuarioFormAbstract } from '../services/usuario-form-abstract';
import { IGrupoModel } from '@data/grupos/models/grupo.model';

@Component({
  selector: 'gestion-chip-info-grupo',
  templateUrl: './chip-info-grupo.component.html',
})
export class ChipInfoGrupoComponent {
  @Input() grupo!: IGrupoModel
  @Input() type: 'permisos' | 'usuarios' = 'usuarios'
  @Input() serviceForm!: UsuarioFormAbstract

  getAmmount() {
    const array = this.type === 'permisos' ? this.grupo.permisos : this.grupo.usuarios
    return array.length
  }

  getLabel() {
    const label = this.type === 'permisos' ? ' Permiso(s)' : ' Usuario(s)'
    return this.getAmmount() + label
  }
}
