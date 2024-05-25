import { Component, Input } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GrupoFormService } from '../../services/grupo-form.service';

@Component({
  selector: 'tabla-grupos',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  @Input() grupos: IGrupoModel[] = [];

  busqueda: string = "";

  constructor(
    public serviceForm: GrupoFormService
  ) { }

  seleccionar(grupo: IGrupoModel) {
    this.serviceForm.toggleSeleccionar(grupo);
  }

  filtrarGrupos() {
    return this.grupos.filter(grupo =>
      Object.values(grupo).some(value =>
        value?.toString().toLowerCase().includes(this.busqueda.toLowerCase())
      )
    );
  }
}