import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
maquinaSeleccionada: string | null = null;

  // Método ficticio para seleccionar una máquina
  seleccionarMaquina(id: string) {
    this.maquinaSeleccionada = id;
  }

  constructor() { }
  busqueda: string = "";
}
