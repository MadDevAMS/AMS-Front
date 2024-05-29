import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IActivoNode } from '../../interfaces/activo-node';

const TREE_DATA: IActivoNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    type: 'root',
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    type: 'environment',
    level: 1,
  },
  {
    name: 'Banana',
    expandable: false,
    type: 'environment',
    level: 1,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    type: 'environment',
    level: 1,
  },
  {
    name: 'Vegetables',
    expandable: true,
    type: 'root',
    level: 0,
  },
  {
    name: 'Green',
    expandable: true,
    type: 'environment',
    level: 1,
  },
  {
    name: 'Broccoli',
    expandable: false,
    type: 'machine',
    level: 2,
  },
  {
    name: 'Brussels sprouts',
    expandable: true,
    type: 'machine',
    level: 2,
  },
  {
    name: 'Example',
    expandable: true,
    type: 'engine',
    level: 3
  },
  {
    name: 'Example',
    expandable: true,
    type: 'spot',
    level: 4
  },
  {
    name: 'Example',
    expandable: true,
    type: 'route',
    level: 5
  },
  {
    name: 'Orange',
    expandable: true,
    type: 'environment',
    level: 1,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    type: 'machine',
    level: 2,
  },
  {
    name: 'Carrots',
    expandable: false,
    type: 'machine',
    level: 2,
  },
];

@Component({
  selector: 'activos-arbol',
  styleUrls: ['arbol.component.scss'],
  templateUrl: './arbol.component.html',
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
      state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
      transition('expanded <=> collapsed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ArbolComponent {
  nodoSeleccionado: IActivoNode = TREE_DATA[0]

  treeControl = new FlatTreeControl<IActivoNode>(
    node => node.level,
    node => node.expandable,
  );

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: IActivoNode) => node.expandable;

  seleccion(node: IActivoNode) {
    this.nodoSeleccionado = node
  }

  getParentNode(node: IActivoNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
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
