import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { IActivoNode } from '../../interfaces/activo-node';
import { ActivosUsecaseService } from '../../services/activos-usecase.service';
import { IActivoModel } from '@data/activos/models/activo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'activos-arbol',
  styleUrls: ['arbol.component.scss'],
  templateUrl: './arbol.component.html',
})
export class ArbolComponent implements OnInit, OnDestroy {
  private activosSubscription!: Subscription;
  activosListado: IActivoNode[] = []

  dataSource!: ArrayDataSource<IActivoNode>;
  treeControl = new FlatTreeControl<IActivoNode>(
    node => node.level,
    node => node.expandable,
  );

  constructor(
    public serviceUsecase: ActivosUsecaseService,
  ) { }

  ngOnInit() {
    this.serviceUsecase.loadData()
    this.activosSubscription = this.serviceUsecase.activos$.subscribe({
      next: (activos) => {
        if (activos && activos.id && activos.nombre && activos.type && activos.hijos) {
          this.construirArbol(activos);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.activosSubscription) {
      this.activosSubscription.unsubscribe();
    }
  }

  construirArbol(activos: IActivoModel) {
    this.activosListado = this.buildTree(activos, 0);
    this.dataSource = new ArrayDataSource(this.activosListado);
  }

  changeSearch(e: any) {
    const search = e.target.value
    const listadoFilter = this.activosListado.filter(activo => activo.nombre.toLowerCase().includes(search.toLowerCase()))
    this.dataSource = new ArrayDataSource(listadoFilter)
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
