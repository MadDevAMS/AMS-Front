import { Component, Input } from '@angular/core';
import { IActivoModel } from '@data/activos/models/activo.model';

@Component({
	selector: 'main-card-info',
	templateUrl: './card-info.component.html',
})
export class CardInfoComponent {
	@Input() type?: IActivoModel["type"]
	@Input() title?: string
	@Input() count?: number
}