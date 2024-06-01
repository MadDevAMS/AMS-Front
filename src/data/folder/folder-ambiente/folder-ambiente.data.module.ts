import { NgModule } from '@angular/core';
import { GetFolderAmbienteUsecase } from './usecases/get-folder-ambiente.usecase';
import { FolderAmbienteRepository } from './repository/folder-ambiente.repository';
import { UpdateFolderAmbienteUsecase } from './usecases/update-folder-ambiente.usecase';
import { FolderAmbienteDomainModule } from '@domain/folder/folder-ambiente/folder-ambiente.domain.module';

@NgModule({
  declarations: [],
  imports: [ FolderAmbienteDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetFolderAmbienteUsecase,
      useFactory: (folderAmbienteRepo: FolderAmbienteRepository) => new GetFolderAmbienteUsecase(folderAmbienteRepo),
      deps: [FolderAmbienteRepository]
    },
    { 
      provide: UpdateFolderAmbienteUsecase,
      useFactory: (folderAmbienteRepo: FolderAmbienteRepository) => new UpdateFolderAmbienteUsecase(folderAmbienteRepo),
      deps: [FolderAmbienteRepository]
    },
  ],
})
export class FolderAmbienteDataModule {}