import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'activos-metrica-form',
  templateUrl: './metrica-form.component.html',
})
export class MetricaFormComponent {
  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
