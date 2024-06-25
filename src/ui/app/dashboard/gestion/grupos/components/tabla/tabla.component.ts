import { Component, Input } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GrupoFormService } from '../../services/grupo-form.service';
import { GrupoUsecaseService } from '../../services/grupo-usecase.service';
import { UsuariosFilterGruposDrawer } from '@ui/dashboard/gestion/usuarios/components/drawer/usuarios-filter-grupos-drawer.component';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { PageEvent } from '@angular/material/paginator';
import { GruposFilterGruposDrawer } from '../drawer/filter-grupos-drawer.component';
import { Subscription } from 'rxjs';
import { GrupoConfigService } from '../../services/grupo-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tabla-grupos',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  busqueda: string = "";
  private deleteSuscription!: Subscription;

  constructor(
    public servicio: GrupoUsecaseService,
    public servicioForm: GrupoFormService,
    private groupConfigService: GrupoConfigService,
    private drawerService: DrawerService,
    private router: Router,
  ) { 
    this.deleteSuscription = this.groupConfigService.hasDeleted().subscribe(_ => {
      this.servicio.getAllUsuarios() 
    })
  }

  ngOnInit(): void {
    this.servicio.getAllUsuarios()
  }

  ngOnDestroy(): void {
    if (this.deleteSuscription) {
      this.deleteSuscription.unsubscribe()
    }
  }
  
  addGroupRoute() {
    this.router.navigate(['/dashboard/gestion/grupos/create']);
  }

  handleOpenConfig(grupo: IGrupoModel) {
    this.groupConfigService.openDrawer(grupo)
  }

  handleOpenFiltros() {
    this.drawerService.open(GruposFilterGruposDrawer)
  }

  handlePageEvent(e: PageEvent) {
    this.servicio.gruposParams.records = e.pageSize
    this.servicio.gruposParams.numPage = e.pageIndex + 1
    this.servicio.getAllGrupos()
  }
}