import { Component, Input } from '@angular/core';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { GrupoFormAbstract } from '../../services/grupo-form-abstract';
import { GruposFilterPermisosDrawer } from '../drawer/grupos-filter-permisos-drawer.component';
import { GrupoUsecaseService } from '../../services/grupo-usecase.service';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'grupos-tabla-permisos',
  templateUrl: './tabla-permisos.component.html',
})
export class TablaPermisosComponent {
  @Input() serviceForm!: GrupoFormAbstract
  @Input() wrapperClass!: string
  
  constructor(    
    public servicio: GrupoUsecaseService,
    private drawerService: DrawerService
  ) {}

  handlePageEvent(e: PageEvent) {
    this.servicio.permisosParams.records = e.pageSize
    this.servicio.permisosParams.numPage = e.pageIndex + 1
    this.servicio.getAllPermisos()
  }

  handleOpenFiltros() {
    this.drawerService.open(GruposFilterPermisosDrawer)
  }
}