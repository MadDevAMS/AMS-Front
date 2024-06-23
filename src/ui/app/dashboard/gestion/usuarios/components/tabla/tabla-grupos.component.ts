import { Component } from '@angular/core';
import { UsuarioUsecaseService } from '../../services/usuario-usecase.service';
import { UsuarioFormService } from '../../services/usuario-form.service';
import { PageEvent } from '@angular/material/paginator';
import { DrawerService } from '../../../../shared/services/drawer.service';
import { UsuariosFilterGruposDrawer } from '../drawer/usuarios-filter-grupos-drawer.component';

@Component({
  selector: 'usuarios-tabla-grupos',
  templateUrl: './tabla-grupos.component.html',
})
export class TablaGruposComponent {

  handlePageEvent(e: PageEvent) {
    this.servicio.gruposParams.records = e.pageSize
    this.servicio.gruposParams.numPage = e.pageIndex + 1
    this.servicio.getAllGrupos()
  }

  constructor(    
    public servicio: UsuarioUsecaseService,
    public servicioForm: UsuarioFormService,
    private drawerService: DrawerService
  ) {}

  handleOpenFiltros() {
    this.drawerService.open(UsuariosFilterGruposDrawer)
  }
}
