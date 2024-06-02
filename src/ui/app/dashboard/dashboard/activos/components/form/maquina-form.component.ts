import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'activos-maquina-form',
  templateUrl: './maquina-form.component.html',
})
export class MaquinaFormComponent { 
  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
