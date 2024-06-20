import { Component } from '@angular/core';
import { MonitoreoModule } from '../monitoreo.module';

@Component({
  selector: 'monitoreo-page',
  standalone: true,
  imports:[
    MonitoreoModule
  ],
  templateUrl: './monitoreo.page.html',
})
export class MonitoreoPage {  
  hide: boolean = false
}
