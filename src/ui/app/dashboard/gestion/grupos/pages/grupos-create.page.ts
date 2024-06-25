import { Component } from '@angular/core';
import { GruposModule } from '../grupos.module';
import { GrupoFormService } from '../services/grupo-form.service';

@Component({
  selector: 'grupos-create-page',
  standalone: true,
  imports: [
    GruposModule
  ],
  templateUrl: './grupos-create.page.html',
})
export class GruposCreatePage {
  constructor(
    public serviceForm: GrupoFormService
  ) { }
}
