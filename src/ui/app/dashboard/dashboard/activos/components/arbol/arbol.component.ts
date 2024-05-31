import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { IActivoNode } from '../../interfaces/activo-node';
import { ActivosUsecaseService } from '../../services/activos-usecase.service';
import { IActivoModel } from '@data/activos/models/activo.model';
import { ActivosFormService } from '../../services/activos-form.service';

@Component({
  selector: 'activos-arbol',
  styleUrls: ['arbol.component.scss'],
  templateUrl: './arbol.component.html',
  animations: []
})
export class ArbolComponent {
  activosListado: IActivoNode[] = []
  nombreActivoSearch: string = ""

  dataSource!: ArrayDataSource<IActivoNode>;
  treeControl = new FlatTreeControl<IActivoNode>(
    node => node.level,
    node => node.expandable,
  );

  constructor(
    public serviceUsecase: ActivosUsecaseService,
    private formService: ActivosFormService<any>
  ) {
    if (this.serviceUsecase.activos) {
      this.activosListado = this.buildTree(this.serviceUsecase.activos, 0);
      this.formService.seleccionar(this.activosListado[0])
      this.dataSource = new ArrayDataSource(this.activosListado);
    }
  }

  buildTree(activo: IActivoModel, level: number): IActivoNode[] {
    let nodes: IActivoNode[] = [];
    const node: IActivoNode = {
      id: activo.id,
      nombre: activo.nombre,
      type: activo.type,
      level: level,
      expandable: !!activo.hijos.length,
      isExpanded: true,
    };
    nodes.push(node);
    if (activo.hijos.length > 0) {
      activo.hijos.forEach(activo => {
        nodes = nodes.concat(this.buildTree(activo, level + 1));
      })
    }
    return nodes;
  }

  hasChild = (_: number, node: IActivoNode) => node.expandable;

  getParentNode(node: IActivoNode) {
    const nodeIndex = this.activosListado.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.activosListado[i].level === node.level - 1) {
        return this.activosListado[i];
      }
    }

    return null;
  }

  shouldRender(node: IActivoNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}
