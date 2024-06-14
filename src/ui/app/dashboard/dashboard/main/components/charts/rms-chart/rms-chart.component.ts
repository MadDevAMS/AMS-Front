import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis
} from 'ng-apexcharts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { API_URL } from '@base/environment';
import { ChartDataService } from '../../../services/chart-data.service';

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
  public chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File
  constructor( private chartdataService: ChartDataService) {}

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
      title: {
        text: 'Gráfico de Aceleración RMS en función del Tiempo',
        align: 'center'
      }
    };

  }

  seleccionarArchivo(event: any){
    this.archivoSeleccionado = event.target.files[0]
  }

  enviarArchivo() {
    if (this.archivoSeleccionado) {
      this.chartdataService.uploadRMSFile(this.archivoSeleccionado).subscribe(
        response => {
          console.log('Response from server:', response);
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
            } else {
              console.error('axisX, axisY o axisZ no están definidos en la respuesta', response.data);
            }
          } else {
            console.error('Datos incompletos en la respuesta del servidor', response);
          }
        },
        error => {
          console.error('Error al subir el archivo', error);
        }
      );
    }
  }
}










