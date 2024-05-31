import { Injectable } from '@angular/core';
import { IActivoNode } from '../interfaces/activo-node';
import { ActivosFormUsecaseService } from './activos-form-usecase.service';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { ActivosUsecaseService } from './activos-usecase.service';
import { IActivoModel } from '@data/activos/models/activo.model';

interface IDataNodoHijo {
  tipo: IActivoNode["type"],
  nombre: string,
  cantidad: number
}

@Injectable({
  providedIn: 'platform'
})
export class ActivosFormService<T> {
  nodoSeleccionado: IActivoNode | undefined
  dataNodoHijos: IDataNodoHijo[] = []
  dataNodo: T | undefined

  nameDataNodes: Record<IActivoNode["type"], string> = {
    componente: 'Componentes',
    entidad: 'Entidades',
    folder: 'Ambientes',
    maquina: 'Maquinas',
    metrica: 'Metricas',
    punto_monitoreo: 'Puntos de monitoreo',
  }

  constructor(
    private activosUsecaseService: ActivosUsecaseService,
    private usecaseService: ActivosFormUsecaseService,
    private snackbarService: SnackbarService
  ) {}

  seleccionar(nodo: IActivoNode) {
    this.nodoSeleccionado = nodo
    this.dataNodoHijos = []
    let activoBuscado = this.buscarNodo(this.activosUsecaseService.activos, nodo)
    if (activoBuscado) this.extraerInfoNodo(activoBuscado)
    this.usecaseService.execute(nodo).subscribe({
      next: (res) => {
        this.dataNodo = res as T
      },
      error: (err) => {
        this.snackbarService.open({
          mensaje: err.message || 'Ha ocurrido un error, revise su conexión a internet o inténtelo más tarde',
          type: 'error',
        })
      }
    })
  }

  buscarNodo(activos: IActivoModel, nodo: IActivoNode): IActivoModel | undefined {
    if (activos.id === nodo.id) {
      return activos
    } else if (activos.hijos.length > 0){
      return activos.hijos.find(activo => this.buscarNodo(activo, nodo))
    } else {
      return undefined
    }
  }

  extraerInfoNodo(nodo: IActivoModel) {
    nodo?.hijos.forEach((activo) => {
      let typeIndex = (this.dataNodoHijos).findIndex(data => data?.tipo === activo.type)
      if (typeIndex === -1) {
        let newNode: IDataNodoHijo = {
          nombre: this.nameDataNodes[activo.type],
          cantidad: 1,
          tipo: activo.type,
        }
        this.dataNodoHijos.push(newNode)
      } else {
        (this.dataNodoHijos)[typeIndex].cantidad++
      }
      this.extraerInfoNodo(activo)
    })
  }
}