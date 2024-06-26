import { Component, Input } from '@angular/core';
import { GrupoFormAbstract } from '../../services/grupo-form-abstract';
import { GrupoUsecaseService } from '../../services/grupo-usecase.service';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { PageEvent } from '@angular/material/paginator';
import { GruposFilterUsuariosDrawer } from '../drawer/grupos-filter-usuarios-drawer.component';

@Component({
  selector: 'grupos-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
})
export class TablaUsuariosComponent {
  @Input() serviceForm!: GrupoFormAbstract
  @Input() wrapperClass!: string
  
  constructor(    
    public servicio: GrupoUsecaseService,
    private drawerService: DrawerService
  ) {}

  handlePageEvent(e: PageEvent) {
    this.servicio.usuariosParams.records = e.pageSize
    this.servicio.usuariosParams.numPage = e.pageIndex + 1
    this.servicio.getAllUsuarios()
  }

  handleOpenFiltros() {
    this.drawerService.open(GruposFilterUsuariosDrawer)
  }
}