import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
maquinaSeleccionada: string | null = null;

  seleccionarMaquina(id: string) {
    this.maquinaSeleccionada = id;
  }

  constructor() { }
  busqueda: string = "";
}
