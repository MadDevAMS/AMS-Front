import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';
import { ActivosFormService } from '../../services/activos-form.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAreaComponent } from '../modal/modal-area.component';
import { IActivoModel } from '@data/activos/models/activo.model';
import { ModalComponenteComponent } from '../modal/modal-componente.component';
import { ModalMaquinaComponent } from '../modal/modal-maquina.component';
import { ModalPuntoComponent } from '../modal/modal-punto.component';
import { ModalMetricaComponent } from '../modal/modal-metrica.component';

@Component({
  selector: 'activos-arbol-item',
  styleUrls: ['arbol-item.component.scss'],
  templateUrl: './arbol-item.component.html',
})
export class ArbolItemComponent {
  @Input() node!: IActivoNode
  @ViewChild('arbolItem') arbolItem!: ElementRef;

  modalesComponent: Record<IActivoModel['type'], any> = {
    entidad: {
      type: 'area',
      modal: ModalAreaComponent
    },
    area: {
      type: 'maquina',
      modal: ModalMaquinaComponent
    },
    maquina: {
      type: 'componente',
      modal: ModalComponenteComponent
    },
    componente: {
      type: 'punto_monitoreo',
      modal: ModalPuntoComponent
    },
    punto_monitoreo: {
      type: 'metrica',
      modal: ModalMetricaComponent
    },
    metrica: null
  }

  modalesOption: Record<IActivoModel['type'], any> = {
    entidad: [this.modalesComponent.entidad],
    area: [this.modalesComponent.entidad, this.modalesComponent.area],
    maquina: [this.modalesComponent.maquina],
    componente: [this.modalesComponent.componente],
    punto_monitoreo: [],
    metrica: []
  }

  openOptions = false

  constructor(
    public serviceForm: ActivosFormService<any>,
    public dialog: MatDialog
  ) {}

  openDialog(index: number): void {
    const Modal = this.modalesOption[this.node.type][index].modal
    if (Modal) {
      this.dialog.open(Modal, {
        data: {
          idParent: this.node.id
        }
      });
    }
  }

  scroll() {
    this.arbolItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  seleccionar() {
    const nodo = this.serviceForm.nodoSeleccionado
    if (!(nodo?.id === this.node.id && nodo?.type === this.node.type)) {
      this.serviceForm.seleccionar(this.node)
      this.scroll()
    }
  }
}
