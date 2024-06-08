import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArbolComponent } from './components/arbol/arbol.component';
import { ArbolItemComponent } from './components/arbol/arbol-item.component';
import { ActivosDataModule } from '@data/activos/activos.data.module';
import { ActivosUsecaseService } from './services/activos-usecase.service';
import { ActivosFormService } from './services/activos-form.service';
import { ActivosFormUsecaseService } from './services/activos-form-usecase.service';
import { EntidadDataModule } from '@data/entidad/entidad.data.module';
import { MaquinaDataModule } from '@data/maquina/maquina.data.module';
import { PuntoDataModule } from '@data/punto/punto.data.module';
import { ComponenteDataModule } from '@data/componente/componente.data.module';
import { ChipComponent } from './components/chip/chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivosUpdateUsecaseService } from './services/activos-update.usecase.service';
import { AreaDataModule } from '@data/area/area.data.module';
import { EntidadCardComponent } from './components/cards/entidad-card.component';
import { ComponenteCardComponent } from './components/cards/componente-card.component';
import { AreaCardComponent } from './components/cards/area-card.component';
import { MaquinaCardComponent } from './components/cards/maquina-card.component';
import { PuntoCardComponent } from './components/cards/punto-card.component';
import { MetricaDataModule } from '@data/metrica/metrica.data.module';
import { MetricaCardComponent } from './components/cards/metrica-card.component';
import { ModalAreaComponent } from './components/modal/modal-area.component';
import { ActivosFormModule } from './components/form/activos-form.module';

const declarations = [
  ArbolComponent, 
  ArbolItemComponent,

  ComponenteCardComponent,
  EntidadCardComponent,
  AreaCardComponent,
  MaquinaCardComponent,
  PuntoCardComponent,
  MetricaCardComponent,
]

const commonModules = [
  SharedModule,
  
  ActivosDataModule,
  EntidadDataModule,
  MaquinaDataModule,
  ComponenteDataModule,
  PuntoDataModule,
  AreaDataModule,
  MetricaDataModule,
  
  ChipComponent,
  ModalAreaComponent,
  ActivosFormModule,

  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...commonModules,
    ...declarations
  ],
  providers: [
    ActivosUsecaseService,
    ActivosUpdateUsecaseService,
    ActivosFormService,
    ActivosFormUsecaseService
  ],
})
export class ActivosModule { }