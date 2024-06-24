import { Component } from '@angular/core';
import { ReporteModule } from '../reporte.module';

@Component({
  selector: 'reportes-page',
  templateUrl: './reportes.page.html',
  imports: [
    ReporteModule
  ],
  standalone: true,

})
export class ReportesPage {
  hide: boolean = false

}
