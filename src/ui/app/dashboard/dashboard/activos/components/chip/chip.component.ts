import { Component, Input } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'activos-chip',
  imports: [
    MatIcon,
    CommonModule
  ],
  standalone: true,
  templateUrl: './chip.component.html',
})
export class ChipComponent { 
  @Input() node!: IActivoNode;
}
