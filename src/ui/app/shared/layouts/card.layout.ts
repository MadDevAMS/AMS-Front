import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-layout',
  standalone: true,
  templateUrl: './card.layout.html',
})
export class CardLayout { 
  @Input() title!: string
}