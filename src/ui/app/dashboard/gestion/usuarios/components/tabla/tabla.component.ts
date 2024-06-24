import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IUsuarioModel } from '@data/usuarios/models/usuario.model';
import { PageEvent } from '@angular/material/paginator';
import { UsuariosFilterUsuariosDrawer } from '../drawer/usuarios-filter-usuarios-drawer.component';
import { Router } from '@angular/router';
import { UsuarioConfigService } from '../../services/usuario-config.service';
import { Subscription } from 'rxjs';
import { UsuarioFormService } from '../../services/usuario-form.service';
import { UsuarioUsecaseService } from '../../services/usuario-usecase.service';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';

@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla.component.html',
})
export class TablaComponent implements OnInit, OnDestroy {
  busqueda: string = "";
  private deleteSuscription!: Subscription;

  constructor(
    public servicio: UsuarioUsecaseService,
    public servicioForm: UsuarioFormService,
    private userConfigService: UsuarioConfigService,
    private drawerService: DrawerService,
    private router: Router,
  ) { 
    this.deleteSuscription = this.userConfigService.hasDeleted().subscribe(_ => {
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
  
  addUserRoute() {
    this.router.navigate(['/dashboard/gestion/usuarios/create']);
  }

  handleOpenConfig(usuario: IUsuarioModel) {
    this.userConfigService.openDrawer(usuario)
  }

  handleOpenFiltros() {
    this.drawerService.open(UsuariosFilterUsuariosDrawer)
  }

  handlePageEvent(e: PageEvent) {
    this.servicio.usuariosParams.records = e.pageSize
    this.servicio.usuariosParams.numPage = e.pageIndex + 1
    this.servicio.getAllUsuarios()
  }
}