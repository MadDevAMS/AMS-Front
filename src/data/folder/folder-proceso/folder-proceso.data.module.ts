import { NgModule } from '@angular/core';
import { GetFolderProcesoUsecase } from './usecases/get-folder-proceso.usecase';
import { UpdateFolderProcesoUsecase } from './usecases/update-folder-proceso.usecase';
import { FolderProcesoRepository } from './repository/folder-proceso.repository';
import { FolderProcesoDomainModule } from '@domain/folder/folder-proceso/folder-proceso.domain.module';

@NgModule({
  declarations: [],
  imports: [ FolderProcesoDomainModule ],
  exports: [],
  providers: [
    { 
      provide: GetFolderProcesoUsecase,
      useFactory: (folderProcesoRepo: FolderProcesoRepository) => new GetFolderProcesoUsecase(folderProcesoRepo),
      deps: [FolderProcesoRepository]
    },
    { 
      provide: UpdateFolderProcesoUsecase,
      useFactory: (folderProcesoRepo: FolderProcesoRepository) => new UpdateFolderProcesoUsecase(folderProcesoRepo),
      deps: [FolderProcesoRepository]
    },
  ],
})
export class FolderProcesoDataModule {}