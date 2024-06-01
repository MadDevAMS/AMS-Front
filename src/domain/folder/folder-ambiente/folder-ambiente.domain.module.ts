import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FolderAmbienteRepository } from '@data/folder/folder-ambiente/repository/folder-ambiente.repository';
import { FolderAmbienteImplementationRepository } from './folder-ambiente.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: FolderAmbienteRepository,
      useFactory: (httpClient: HttpClient) => new FolderAmbienteImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class FolderAmbienteDomainModule {}