import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { direccionesMedida } from '@ui/shared/variables/direccionesMedida';
import { anguloDireccionMedida } from '@ui/shared/variables/anguloDireccionMedida';

@Component({
  selector: 'activos-punto-form',
  templateUrl: './punto-form.component.html',
})
export class PuntoFormComponent { 
  direccionesMedida = direccionesMedida
  anguloDireccionMedida = anguloDireccionMedida

  @Input() formData!: FormGroup
  @Input() hasError!: any
  @Input() getErrorsApi!: any
}
