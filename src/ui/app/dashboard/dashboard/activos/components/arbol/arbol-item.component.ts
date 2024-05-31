import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';
import { ActivosFormService } from '../../services/activos-form.service';

@Component({
  selector: 'activos-arbol-item',
  styleUrls: ['arbol-item.component.scss'],
  templateUrl: './arbol-item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ArbolItemComponent {
  @Input() node!: IActivoNode
  @ViewChild('arbolItem') arbolItem!: ElementRef;

  constructor(public serviceForm: ActivosFormService<any>) {}

  seleccionar() {
    this.serviceForm.seleccionar(this.node)
    this.arbolItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
