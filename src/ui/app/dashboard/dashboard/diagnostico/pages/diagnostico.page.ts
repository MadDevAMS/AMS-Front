import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'diagnostico-page',
  standalone: true,
  imports: [
    SharedModule,
    
  ],
  templateUrl: './diagnostico.page.html',
})
export class DiagnosticoPage {
}
