import { Component } from '@angular/core';
import { MainModule } from '../main.module';
import { GetActivosUsecase } from '@data/activos/usecases/get-activos.usecase';
import { IActivoModel } from '@data/activos/models/activo.model';

type IObjectCount = Record<IActivoModel['type'], number>

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [ MainModule ],
  templateUrl: './main.page.html',
})
export class MainPage {
  activosCount: IObjectCount = {
    area: 0,
    componente: 0,
    entidad: 0,
    maquina: 0,
    metrica: 0,
    punto_monitoreo: 0
  }
  activos!: IActivoModel

  constructor(
    private activosService: GetActivosUsecase
  ) {
    this.activosService.execute().subscribe({
      next: (res) => {
        if (res.data) {
          this.activos = res.data
          this.reduceActivosCount(this.activos, this.activosCount)
        }
      }
    })
  }

  reduceActivosCount(activos: IActivoModel, objectCount: IObjectCount) {
    objectCount[activos.type]++
    activos.hijos.forEach(activo => {
      this.reduceActivosCount(activo, objectCount)
    })
  }
}
