import { NgModule } from '@angular/core';
import { ModalEntidadComponent } from './modal-entidad.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalEntidadComponent],
  imports: [ 
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
   ],
  exports: [ModalEntidadComponent],
  providers: [],
})
export class ModalActivosModule {}