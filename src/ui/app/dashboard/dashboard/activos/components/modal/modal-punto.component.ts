import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivosFormModule } from '../form/activos-form.module';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { IErrorResponse } from '@base/response/response';
import { PuntoDataModule } from '@data/punto/punto.data.module';
import { CreatePuntoUsecase } from '@data/punto/usecases/create-punto.usecase';

@Component({
  selector: 'activo-modal-punto',
  standalone: true,
  imports: [
    ActivosFormModule,
    MaterialModule,

    PuntoDataModule,
  ],
  providers: [
    SnackbarService,
    CreatePuntoUsecase
  ],
  templateUrl: './modal-punto.component.html',
})
export class ModalPuntoComponent {
  formCreate!: FormGroup

  constructor(
    private createUsecase: CreatePuntoUsecase,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ModalPuntoComponent>,
  ) {
    this.formCreate = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('')
    })
  }

  hasError(formData: FormGroup, field: string, type: string): boolean {
    return formData?.get(field)?.getError(type)
  }

  getErrorsApi(formData: FormGroup, field: string): string[] {
    return formData?.get(field)?.getError('errors')
  }

  onSubmit() {
    this.formCreate.markAllAsTouched()
    if (this.formCreate.valid) {
      this.createUsecase.execute(this.formCreate.value)
      .subscribe({
        next: (res) => {
          if (res.status !== 201) {
            res.errors?.forEach((err: IErrorResponse) => {
              this.formCreate.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar crear el punto de monitoreo',
              type: 'error'
            })
          } else {
            this.snackbarService.open({ 
              mensaje: res.message,
              type: 'success'
            })
          }
        },
        error: (err) => {
          this.snackbarService.open({
            mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
            type: 'error',
          })  
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
