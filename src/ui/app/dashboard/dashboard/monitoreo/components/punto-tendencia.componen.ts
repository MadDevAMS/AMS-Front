
import { Component, Input } from '@angular/core';

@Component({
  selector: 'monitoreo-punto-tendencia',
  templateUrl: './punto-tendencia.component.html',
})
export class PuntoTendenciaComponent {
  @Input() status: 'error' | 'normal' | 'warning' = 'normal'
}
