import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexAnnotations
} from 'ng-apexcharts';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { ChartDataService } from '../../../services/chart-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFilesComponent } from '../../modal/modal-files.component';
import { IChartS3FileEntity } from '@domain/charts/dashboard/chart-s3-file.entity';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'main-charts-dashboard',
  templateUrl: './rms-chart.component.html',
})
export class ChartsDashboardComponent implements OnInit {
  @Input() title!: string
  chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File
  hasLoad = false
  isDragOver = false

  constructor(
    private dialog: MatDialog,
    private chartdataService: ChartDataService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'RMS',
          data: []
        }
      ],
      chart: {
        type: 'line',
        height: 350,
        width: '100%'
      },
      xaxis: {
        categories: [],
        type: 'datetime',
        title: {
          text: 'Tiempo'
        },
        labels: {
          rotate: -45,
          formatter: function (val) {
            return val ? new Date(val).toLocaleDateString() : '';
          }
        }
      },
      yaxis: {
        title: {
          text: 'Aceleración RMS'
        },
        labels: {
          formatter: function (val) {
            return val ? val.toFixed(1) : '';
          }
        }
      },
    };
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalFilesComponent, {
      data: {
        files: this.chartdataService.filesS3
      }
    })

    dialogRef.afterClosed().subscribe((res: IChartS3FileEntity) => {
      if (res) {
        const key = res.name.substring(res.name.lastIndexOf('/') + 1, res.name.length)
        this.chartdataService.getRMSFile(key).subscribe({
          next: (response) => {
            this.cargarInfo(response)
          },
          error: (error) => {
            this.snackbarService.open({
              mensaje: error.message,
              type: 'error'
            })
          }
        })
      }
    })
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        this.archivoSeleccionado = file
        this.enviarArchivo()
        return;
      }
    }
  }

  seleccionarArchivo(event: any) {
    this.archivoSeleccionado = event.target.files[0]
    this.enviarArchivo()
  }

  enviarArchivo() {
    if (this.archivoSeleccionado) {
      this.hasLoad = false
      this.chartdataService.uploadRMSFile(this.archivoSeleccionado).subscribe({
        next: (response) => {
          this.cargarInfo(response)
        },
        error: (error) => {
          this.snackbarService.open({
            mensaje: error.message,
            type: 'error'
          })
        }
      });
    }
  }

  cargarInfo(response: any) {
    if (response && response.data) {
      const { timeStamp, axisX, axisY, axisZ } = response.data;
      if (timeStamp && axisX && axisY && axisZ) {
        const rms = timeStamp.map((_: any, i: number) =>
          Math.sqrt((axisX[i] ** 2 + axisY[i] ** 2 + axisZ[i] ** 2) / 3)
        );

        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'RMS',
              data: rms
            }
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: timeStamp
          }
        };
        this.hasLoad = true
      } else {
        this.snackbarService.open({
          mensaje: 'Hubo un error en el procesamiento de datos',
          type: 'error'
        })
      }
    } else {
      this.snackbarService.open({
        mensaje: response.message,
        type: 'error'
      })
    }
  }
}