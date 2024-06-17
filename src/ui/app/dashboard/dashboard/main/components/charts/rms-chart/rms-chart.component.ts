import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis
} from 'ng-apexcharts';
import { ChartDataService } from '../../../services/chart-data.service';
import { SnackbarService } from '@ui/shared/services/snackbar.service';

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
  chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File
  hasLoad = false
  isDragOver = false

  constructor(
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
        title: {
          text: 'Tiempo'
        },
        labels: {
          rotate: -45,
          formatter: function (val) {
            return val ? new Date(val).toLocaleString() : '';
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
        },
        error: (error) => {
          this.snackbarService.open({
            mensaje: error.message,
            type: 'error'
          })
        }
      }
      );
    }
  }
}