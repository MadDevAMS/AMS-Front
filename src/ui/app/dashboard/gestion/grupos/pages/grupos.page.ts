import { Component } from '@angular/core';
import { GruposModule } from '../grupos.module';
import { GrupoUsecaseService } from '../services/grupo-usecase.service';
import { GrupoFormService } from '../services/grupo-form.service';

@Component({
  selector: 'grupos-page',
  standalone: true,
  imports: [
    GruposModule
  ],
  templateUrl: './grupos.page.html',
})
export class GruposPage {
  constructor(
    public service: GrupoUsecaseService,
    public serviceForm: GrupoFormService
  ) { }
}
