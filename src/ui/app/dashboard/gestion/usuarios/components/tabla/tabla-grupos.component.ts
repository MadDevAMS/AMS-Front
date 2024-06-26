import { Component, Input } from '@angular/core';
import { UsuarioUsecaseService } from '../../services/usuario-usecase.service';
import { PageEvent } from '@angular/material/paginator';
import { DrawerService } from '../../../../shared/services/drawer.service';
import { UsuariosFilterGruposDrawer } from '../drawer/usuarios-filter-grupos-drawer.component';
import { UsuarioFormAbstract } from '../../services/usuario-form-abstract';

@Component({
  selector: 'usuarios-tabla-grupos',
  templateUrl: './tabla-grupos.component.html',
})
export class TablaGruposComponent {
  @Input() serviceForm!: UsuarioFormAbstract
  @Input() wrapperClass!: string
  
  constructor(    
    public servicio: UsuarioUsecaseService,
    private drawerService: DrawerService
  ) {}

  handlePageEvent(e: PageEvent) {
    this.servicio.gruposParams.records = e.pageSize
    this.servicio.gruposParams.numPage = e.pageIndex + 1
    this.servicio.getAllGrupos()
  }

  handleOpenFiltros() {
    this.drawerService.open(UsuariosFilterGruposDrawer)
  }
}
