import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';

@NgModule({
  declarations: [],
  imports: [ 
    MaterialModule,
    SharedGlobalModule,
    CdkTreeModule
  ],
  exports: [
    MaterialModule,
    SharedGlobalModule,
    CdkTreeModule
  ],
  providers: [],
})
export class SharedModule {}