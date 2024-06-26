import { Injectable } from '@angular/core';
import { IActivoNode } from '../interfaces/activo-node';
import { ActivosFormUsecaseService } from './activos-form-usecase.service';
import { SnackbarService } from '@ui/shared/services/snackbar.service';
import { ActivosUsecaseService } from './activos-usecase.service';
import { IActivoModel } from '@data/activos/models/activo.model';
import { FormGroup } from '@angular/forms';
import { IErrorResponse } from '@base/response/response';
import { ActivosUpdateUsecaseService } from './activos-update.usecase.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../components/modal/modal-delete.component';

export interface IDataNodoHijo {
  tipo: IActivoNode["type"],
  nombre: string,
  cantidad: number
}

@Injectable({
  providedIn: 'root'
})
export class ActivosFormService<T> {
  nodoSeleccionado: IActivoNode | undefined
  dataNodoHijos: IDataNodoHijo[] = []
  dataNodo: T | undefined
  formDataUpdate!: FormGroup;
  hasAlready = false
  loadingUpdate = false

  nameDataNodes: Record<IActivoNode["type"], string> = {
    componente: 'Componentes',
    entidad: 'Entidades',
    area: 'Areas',
    maquina: 'Maquinas',
    metrica: 'Metricas',
    punto_monitoreo: 'Puntos de monitoreo',
  }

  constructor(
    private activosUsecaseService: ActivosUsecaseService,
    private activosUpdateUsecaseService: ActivosUpdateUsecaseService,
    private usecaseService: ActivosFormUsecaseService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) { }

  openModalDelete() {
    this.dialog.open(ModalDeleteComponent, {
      data: {
        nodoSeleccionado: this.nodoSeleccionado,
        dataNodoHijos: this.dataNodoHijos
      }
    });
  }

  hasError(formData: FormGroup, field: string, type: string): boolean {
    return formData?.get(field)?.getError(type)
  }

  getErrorsApi(formData: FormGroup, field: string): string[] {
    return formData?.get(field)?.getError('errors')
  }

  updateNodo() {
    this.loadingUpdate = false
    this.formDataUpdate?.markAllAsTouched()
    if (this.nodoSeleccionado && this.formDataUpdate && this.formDataUpdate.valid) {
      this.loadingUpdate = true
      this.activosUpdateUsecaseService.execute(this.nodoSeleccionado, {
        id: this.nodoSeleccionado.id,
        ...this.formDataUpdate.value
      })
        .subscribe({
          next: (res) => {
            if (res.status !== 200) {
              res.errors?.forEach((err: IErrorResponse) => {
                this.formDataUpdate.get(err.propertyName)?.setErrors({ errors: err.errorMessage })
              })
              this.snackbarService.open({
                mensaje: res.message || 'Ha ocurrido un error al intentar obtener los datos de este activo',
                type: 'error'
              })
            } else {
              this.dataNodo = res.data as T
              this.snackbarService.open({
                mensaje: res.message,
                type: 'success'
              })
            }
            this.loadingUpdate = false
          },
          error: (err) => {
            console.log(err);
            
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error',
            })
            this.loadingUpdate = false
          }
        })
    }
  }

  seleccionar(nodo: IActivoNode) {
    this.activosUsecaseService.activos$.subscribe(activos => {
      if (activos) {
        this.hasAlready = false
        this.nodoSeleccionado = nodo
        this.dataNodoHijos = []
        let activoBuscado = this.buscarNodo(activos, nodo)
        if (activoBuscado) this.extraerInfoNodo(activoBuscado)
        this.usecaseService.execute(nodo).subscribe({
          next: (res) => {
            if (res.status !== 200) {
              this.snackbarService.open({
                mensaje: res.message || 'Ha ocurrido un error al intentar obtener los datos de este activo',
                type: 'error'
              })
            } else {
              this.dataNodo = res.data as T
              this.hasAlready = true
            }
          },
          error: (err) => {
            this.snackbarService.open({
              mensaje: err.message,
              type: 'error',
            })
          }
        })
      }
    })
  }

  buscarNodo(activos: IActivoModel, nodo: IActivoNode): IActivoModel | undefined {
    if (activos.id === nodo.id && activos.type === nodo.type) {
      return activos
    }

    for (let hijo of activos.hijos) {
      const resultado = this.buscarNodo(hijo, nodo);
      if (resultado) {
        return resultado;
      }
    }

    return undefined
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