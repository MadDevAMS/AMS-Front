import { Component } from '@angular/core';
import { ActivosModule } from '../activos.module';

@Component({
  selector: 'activos-page',
  standalone: true,
  imports: [ ActivosModule ],
  templateUrl: './activos.page.html',
})
export class ActivosPage {}
