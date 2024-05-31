import { Component } from '@angular/core';
import { ActivosModule } from '../activos.module';
import { ActivosFormService } from '../services/activos-form.service';

@Component({
  selector: 'activos-page',
  standalone: true,
  imports: [ ActivosModule ],
  templateUrl: './activos.page.html',
})
export class ActivosPage {
  constructor(
    public formService: ActivosFormService<any>
  ) {}
}
