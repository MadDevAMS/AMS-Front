import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'activos-area-form',
  templateUrl: './area-form.component.html',
})
export class AreaFormComponent {
  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
