import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'activos-componente-form',
  templateUrl: './componente-form.component.html',
})
export class ComponenteFormComponent { 
  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
