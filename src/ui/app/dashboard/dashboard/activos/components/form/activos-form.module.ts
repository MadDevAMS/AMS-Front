import { NgModule } from '@angular/core';
import { ActivosModule } from '../../activos.module';
import { AreaFormComponent } from './area-form.component';
import { ComponenteFormComponent } from './componente-form.component';
import { EntidadFormComponent } from './entidad-form.component';
import { MaquinaFormComponent } from './maquina-form.component';
import { MetricaFormComponent } from './metrica-form.component';
import { PuntoFormComponent } from './punto-form.component';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  AreaFormComponent,
  ComponenteFormComponent,
  EntidadFormComponent,
  MaquinaFormComponent,
  MetricaFormComponent,
  PuntoFormComponent
]

@NgModule({
  declarations: components,
  imports: [ 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: components,
  providers: [],
})
export class ActivosFormModule {}