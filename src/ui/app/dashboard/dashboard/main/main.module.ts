import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardInfoComponent } from './components/card-info.component';
import { VelocityDashboardComponent } from './components/charts/velocidad-chart/velocidad-chart.component';
import { ChartsDashboardComponent } from './components/charts/rms-chart/rms-chart.component';
import { TemperatureDashboardComponent } from './components/charts/temperature-chart/temperature-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDataService } from './services/chart-data.service';
import { ChartDashboardDataModule } from '@data/charts/dashboard/chart-dashboard.data.module';

const declarations = [
  CardInfoComponent,
  VelocityDashboardComponent,
  ChartsDashboardComponent,
  TemperatureDashboardComponent,
]

const commonModules = [
  SharedModule,
  NgApexchartsModule,
  ChartDashboardDataModule
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...commonModules,
    ...declarations
  ],
  providers: [
    ChartDataService,
  ],
})
export class MainModule { }