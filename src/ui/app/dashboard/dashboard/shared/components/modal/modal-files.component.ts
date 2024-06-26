import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { IChartS3FileEntity } from '@domain/charts/dashboard/chart-s3-file.entity';
import { ChartDataService } from '../../services/chart-data.service';

@Component({
  selector: 'dashboard-modal-files',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './modal-files.component.html',
})
export class ModalFilesComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalFilesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { files: IChartS3FileEntity[] } | null
  ) { }

  openFile(file: IChartS3FileEntity) {
    this.dialogRef.close(file)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
