import { Component, Input } from '@angular/core';

@Component({
  selector: 'monitoreo-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
maquinaSeleccionada: string | null = null;

  seleccionarMaquina(id: string) {
    this.maquinaSeleccionada = id;
  }

  constructor() { }
  busqueda: string = "";
}
