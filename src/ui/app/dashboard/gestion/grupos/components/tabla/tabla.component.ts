import { Component, Input, Signal, effect } from '@angular/core';
import { IGrupoModel } from '@data/grupos/models/grupo.model';
import { GrupoUsecaseService } from '../../services/grupo-usecase.service';
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
  @Input() groupConfigService!: GrupoConfigService
  busqueda: string = "";
  private deleteSuscription!: Subscription;

  constructor(
    public servicio: GrupoUsecaseService,
    private drawerService: DrawerService,
    private router: Router,
  ) { 
    this.deleteSuscription = this.groupConfigService?.hasDeleted().subscribe(_ => {
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
    this.groupConfigService?.openDrawer(grupo)
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