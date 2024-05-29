import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';

@Component({
  selector: 'activos-arbol-item',
  styleUrls: ['arbol-item.component.scss'],
  templateUrl: './arbol-item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ArbolItemComponent {
  @Input() node!: IActivoNode
  @Input() hasSelect: boolean = false
  @Output() seleccion = new EventEmitter<IActivoNode>()

  seleccionar() {
    this.seleccion.emit(this.node)
  }
}
