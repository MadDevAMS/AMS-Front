import { Component } from '@angular/core';
import { GruposModule } from '../grupos.module';

@Component({
  selector: 'grupos-create-page',
  standalone: true,
  imports: [
    GruposModule
  ],
  templateUrl: './grupos-create.page.html',
})
export class GruposCreatePage {
}
