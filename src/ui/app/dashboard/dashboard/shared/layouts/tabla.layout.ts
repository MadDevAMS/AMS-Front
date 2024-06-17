import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabla-layout',
  templateUrl: './tabla.layout.html',
})
export class TablaLayout {
  @Input() header: string[] = []
}