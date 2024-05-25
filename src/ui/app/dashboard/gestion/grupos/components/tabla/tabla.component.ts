import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGrupoModel } from '../../../../../../../data/grupos/models/grupo.model';

@Component({
  selector: 'tabla-grupos',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  @Input() grupos: IGrupoModel[] = [];
  @Output() seleccion = new EventEmitter<IGrupoModel>()

  seleccionado: IGrupoModel | null = null;

  seleccionar(grupo: IGrupoModel) {
    this.seleccion.emit(grupo)
    this.seleccionado = this.seleccionado === grupo ? null : grupo
  }
}