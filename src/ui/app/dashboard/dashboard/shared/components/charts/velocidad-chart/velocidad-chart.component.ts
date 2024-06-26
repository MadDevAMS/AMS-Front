import { Component, Input, OnInit } from '@angular/core';
import FFT from 'fft.js';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers,
  ApexFill,
  ApexTooltip,
  ApexStroke,
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
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  annotations: ApexAnnotations;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'main-velocidad-chart-dashboard',
  templateUrl: './velocidad-chart.component.html',
})
export class VelocityDashboardComponent implements OnInit {
  @Input() title!: string

  chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File;
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
          name: 'X Axis',
          data: []
        },
        {
          name: 'Y Axis',
          data: []
        },
        {
          name: 'Z Axis',
          data: []
        }
      ],
      chart: {
        type: "area",
        height: 350
      },
      title: {
        text: 'Grafico Espectral Triaxial',
        align: 'center'
      },
      xaxis: {
        type: 'numeric'
      },
      yaxis: {
        title: {
          text: 'Magnitud'
        },
        decimalsInFloat: 3,
      }
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
        this.chartdataService.getVelocidadFile(key).subscribe({
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
      this.chartdataService.uploadVelocidadFile(this.archivoSeleccionado).subscribe({
        next: response => {
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
        const axisXArray = axisX.map(Number);
        const axisYArray = axisY.map(Number);
        const axisZArray = axisZ.map(Number);
        if (axisXArray.some(isNaN) || axisYArray.some(isNaN) || axisZArray.some(isNaN)) {
          this.snackbarService.open({
            mensaje: 'Hubo un error en el procesamiento de datos',
            type: 'error'
          })
          return;
        }
        const fftSize = this.getNearestPowerOfTwo(Math.min(axisXArray.length, axisYArray.length, axisZArray.length));
        if (fftSize <= 1) {
          this.snackbarService.open({
            mensaje: 'Hubo un error en el procesamiento de datos',
            type: 'error'
          })
          return;
        }
        const fft = new FFT(fftSize);
        const fftX = fft.createComplexArray();
        const fftY = fft.createComplexArray();
        const fftZ = fft.createComplexArray();

        fft.realTransform(fftX, new Float64Array(axisXArray.slice(0, fftSize)));
        fft.realTransform(fftY, new Float64Array(axisYArray.slice(0, fftSize)));
        fft.realTransform(fftZ, new Float64Array(axisZArray.slice(0, fftSize)));

        // Calcular la magnitud del espectro
        const spectrumX = this.calculateMagnitude(fftX);
        const spectrumY = this.calculateMagnitude(fftY);
        const spectrumZ = this.calculateMagnitude(fftZ);

        const sampleRate = 1;
        const frequencies = Array.from({ length: spectrumX.length }, (_, i) => i * sampleRate / fftSize);

        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'X Axis',
              data: spectrumX.map((magnitude, i) => ({ x: frequencies[i], y: magnitude }))
            },
            {
              name: 'Y Axis',
              data: spectrumY.map((magnitude, i) => ({ x: frequencies[i], y: magnitude }))
            },
            {
              name: 'Z Axis',
              data: spectrumZ.map((magnitude, i) => ({ x: frequencies[i], y: magnitude }))
            }
          ],
          chart: {
            type: 'area',
            height: 350
          },
          annotations: {
            yaxis: [
              {
                y: 30,
                borderColor: "#999",
                label: {
                  text: "Support",
                  style: {
                    color: "#fff",
                    background: "#00E396"
                  }
                }
              }
            ],
            xaxis: [
              {
                x: new Date(timeStamp).getTime(),
                borderColor: "#999",
                label: {
                  text: "Rally",
                  style: {
                    color: "#fff",
                    background: "#775DD0"
                  }
                }
              }
            ]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: "numeric",
            tickAmount: 6
          },
          tooltip: {
            x: {
              format: "dd MMM yyyy"
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          }
        }
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

  getNearestPowerOfTwo(n: number): number {
    return Math.pow(2, Math.floor(Math.log2(n)));
  }

  calculateMagnitude(fftArray: number[]): number[] {
    const magnitudes = [];
    for (let i = 0; i < fftArray.length / 2; i++) {
      const real = fftArray[i * 2];
      const imag = fftArray[i * 2 + 1];
      magnitudes.push(Math.sqrt(real * real + imag * imag));
    }
    return magnitudes;
  }


}