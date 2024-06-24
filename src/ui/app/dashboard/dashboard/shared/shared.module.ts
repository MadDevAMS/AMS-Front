import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { InicidenciasListComponent } from './components/incidencias/incidencias-list.component';
import { incidenciaComponent } from './components/incidencias/incidencia.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatDataModule } from '@data/chat/chat.data.module';
import { VelocityDashboardComponent } from './components/charts/velocidad-chart/velocidad-chart.component';
import { ChartsDashboardComponent } from './components/charts/rms-chart/rms-chart.component';
import { TemperatureDashboardComponent } from './components/charts/temperature-chart/temperature-chart.component';
import { ChartDashboardDataModule } from '@data/charts/dashboard/chart-dashboard.data.module';
import { ChartDataService } from './services/chart-data.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';
import { TablaLayout } from './layouts/tabla.layout';
import { TablaColComponent } from './components/tabla-col.component';
import { ChipComponent } from './components/chip/chip.component';

const components = [
  incidenciaComponent,
  InicidenciasListComponent,
  ChatComponent,
  VelocityDashboardComponent,
  ChartsDashboardComponent,
  TemperatureDashboardComponent,
  TablaLayout,
  TablaColComponent,
  ChipComponent
]

const common = [
  MaterialModule,
  SharedGlobalModule,
  CdkTreeModule,
  ChatDataModule,
  ChartDashboardDataModule,
  NgApexchartsModule
]

@NgModule({
  declarations: components,
  imports: common,
  exports: [
    ...common,
    ...components
  ],
  providers: [
    ChartDataService
  ],
})
export class SharedModule {}