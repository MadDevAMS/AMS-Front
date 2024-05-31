import { Component, Input } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';

@Component({
  selector: 'activos-chip',
  templateUrl: './chip.component.html',
})
export class ChipComponent { 
  @Input() node!: IActivoNode;
}
