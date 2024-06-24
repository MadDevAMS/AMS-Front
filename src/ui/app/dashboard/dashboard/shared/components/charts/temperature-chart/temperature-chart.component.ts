import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { ChartDataService } from '../../../services/chart-data.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;

};

@Component({
  selector: 'main-temperature-chart-dashboard',
  templateUrl: './temperature-chart.component.html',
})
export class TemperatureDashboardComponent implements OnInit {
  chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File;
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
          name: "Temperatura",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: []
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 1,
          gradientToColors: ["#00FF00", "#FFA500", "#FF0000"],
          stops: [0, 50, 100]
        }
      },
      markers: {
        size: 0
      },
      yaxis: {
        min: -10,
        max: 40,
        decimalsInFloat: 3,
        title: {
          text: "Temperatura"
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
    this.archivoSeleccionado = event.target.files[0];
    this.enviarArchivo()
  }

  enviarArchivo() {
    if (this.archivoSeleccionado) {
      this.hasLoad = false
      this.chartdataService.uploadTemperatureFile(this.archivoSeleccionado).subscribe({
        next: (response) => {
          if (response && response.data) {
            const { timeStamp, values } = response.data;
            if (timeStamp && values) {
              this.chartOptions = {
                ...this.chartOptions,
                series: [
                  {
                    name: "Temperatura",
                    data: values.map((value: number, index: number) => {
                      return {
                        x: new Date(timeStamp[index]).getTime(),
                        y: value,
                        color: this.getColorForValue(value)
                      };
                    })
                  }
                ],
                xaxis: {
                  ...this.chartOptions.xaxis,
                  categories: timeStamp
                },
              };
              this.hasLoad = true
            } else {
              this.snackbarService.open({
                mensaje: 'TimeStamp o temperature no están definidos en la respuesta',
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
      });
    }
  }
  getColorForValue(value: number): string {
    if (value <= 35) {
      const blueIntensity = Math.floor((value / 35) * 255);
      return `rgb(0, 0, ${blueIntensity})`;
    } else if (value <= 65) {
      const greenIntensity = Math.floor(((value - 35) / 30) * 255);
      return `rgb(0, ${greenIntensity}, 0)`;
    } else {
      const redIntensity = Math.floor(((value - 65) / 35) * 255);
      return `rgb(${redIntensity}, 0, 0)`;
    }
  }
}
