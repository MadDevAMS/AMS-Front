import { Component, OnInit } from '@angular/core';
import FFT from 'fft.js';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle
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
  selector: 'main-Velocity-chart-dashboard',
  templateUrl: './velocidad-chart.component.html',
})
export class VelocityDashboardComponent implements OnInit {
  chartOptions: Partial<ChartOptions> = {};
  archivoSeleccionado!: File;
  hasLoad = false

  constructor(
    private chartdataService: ChartDataService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        { name: 'Espectro en X', data: [] },
        { name: 'Espectro en Y', data: [] },
        { name: 'Espectro en Z', data: [] }
      ],
      chart: { type: 'line', height: 350 },
      xaxis: { title: { text: 'Frecuencia en (Hz)' } },
      yaxis: { title: { text: 'Magnitud' } },
    };
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
          if (response && response.data) {
            const { axisX, axisY, axisZ } = response.data;
            if (axisX && axisY && axisZ) {
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
                  { name: 'Espectro en X', data: spectrumX.map((value, index) => ({ x: frequencies[index], y: value })) },
                  { name: 'Espectro en Y', data: spectrumY.map((value, index) => ({ x: frequencies[index], y: value })) },
                  { name: 'Espectro en Z', data: spectrumZ.map((value, index) => ({ x: frequencies[index], y: value })) }
                ],
                xaxis: {
                  ...this.chartOptions.xaxis,
                  categories: frequencies
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
      });
    }
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

  getNearestPowerOfTwo(n: number): number {
    return Math.pow(2, Math.floor(Math.log2(n)));
  }

}