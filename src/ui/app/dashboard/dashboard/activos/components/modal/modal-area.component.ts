import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivosFormModule } from '../form/activos-form.module';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { CreateAreaUsecase } from '@data/area/usecases/create-area.usecase';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { IErrorResponse } from '@base/response/response';
import { AreaDataModule } from '@data/area/area.data.module';

@Component({
  selector: 'activo-modal-area',
  standalone: true,
  imports: [
    ActivosFormModule,
    MaterialModule,

    AreaDataModule,
  ],
  providers: [
    SnackbarService,
    CreateAreaUsecase
  ],
  templateUrl: './modal-area.component.html',
})
export class ModalAreaComponent {
  formCreate!: FormGroup
  loading = false

  constructor(
    private createUsecase: CreateAreaUsecase,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ModalAreaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { idParent: number }
  ) {
    this.formCreate = new FormGroup({
      idParent: new FormControl(this.data.idParent),
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
      this.loading = true;
      this.createUsecase.execute(this.formCreate.value)
      .subscribe({
        next: (res) => {
          if (res.status !== 200) {
            res.errors?.forEach((err: IErrorResponse) => {
              this.formCreate.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
            })
            this.snackbarService.open({ 
              mensaje: res.message || 'Ha ocurrido un error al intentar crear el área',
              type: 'error'
            })
          } else {
            this.snackbarService.open({ 
              mensaje: res.message,
              type: 'success'
            })
            this.onNoClick()
          }
          this.loading = false
        },
        error: (err) => {
          this.snackbarService.open({
            mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
            type: 'error',
          })  
          this.loading = false
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
