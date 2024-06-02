import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { razonesSociales } from '@ui/shared/variables/razonesSociales';

@Component({
  selector: 'activos-entidad-form',
  templateUrl: './entidad-form.component.html',
})
export class EntidadFormComponent {
  razonesSociales = razonesSociales
  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
