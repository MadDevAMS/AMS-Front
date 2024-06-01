import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { IActivoNode } from '../../interfaces/activo-node';
import { ActivosFormService } from '../../services/activos-form.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEntidadComponent } from '../modal/modal-entidad.component';

@Component({
  selector: 'activos-arbol-item',
  styleUrls: ['arbol-item.component.scss'],
  templateUrl: './arbol-item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ArbolItemComponent {
  @Input() node!: IActivoNode
  @ViewChild('arbolItem') arbolItem!: ElementRef;

  constructor(
    public serviceForm: ActivosFormService<any>,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEntidadComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  seleccionar() {
    this.serviceForm.seleccionar(this.node)
    this.arbolItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
