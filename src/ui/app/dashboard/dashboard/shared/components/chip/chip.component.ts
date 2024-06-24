import { Component, Input } from '@angular/core';
import { IActivoNode } from '../../../activos/interfaces/activo-node';

@Component({
  selector: 'activos-chip',
  templateUrl: './chip.component.html',
})
export class ChipComponent { 
  @Input() node!: IActivoNode;
}
