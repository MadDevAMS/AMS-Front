import { Component, Input } from '@angular/core';
import { UsuarioFormAbstract } from '../services/usuario-form-abstract';
import { IGrupoModel, IGrupoPermisoModel } from '@data/grupos/models/grupo.model';

@Component({
  selector: 'gestion-info-grupos-permisos',
  templateUrl: './info-grupos-permisos.component.html',
})
export class InfoGruposPermisosComponent {
  @Input() servicioForm!: UsuarioFormAbstract

  getPermisos() {
    const permisos = this.servicioForm.gruposSeleccionados.reduce((acc: IGrupoPermisoModel[], curr: IGrupoModel) => {
      const newPermisos = curr.permisos.filter(p => !acc.some(ap => ap.id === p.id))
      return acc.concat(newPermisos)
    }, [] as IGrupoPermisoModel[])
    return permisos
  }
}
