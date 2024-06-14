import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDomainModule } from '@domain/shared-domain.module';
import { ChartDashboardRepository } from '@data/charts/dashboard/repository/chart-dashboard.repository';
import { ChartDashboardImplementationRepository } from './chart-dashboard.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: ChartDashboardRepository,
      useFactory: (httpClient: HttpClient) => new ChartDashboardImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class ChartDashboardDomainModule {}