import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FolderProcesoImplementationRepository } from './folder-proceso.implementation.repository';
import { FolderProcesoRepository } from '@data/folder/folder-proceso/repository/folder-proceso.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: FolderProcesoRepository,
      useFactory: (httpClient: HttpClient) => new FolderProcesoImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class FolderProcesoDomainModule {}