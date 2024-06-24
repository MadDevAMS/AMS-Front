import { Component } from '@angular/core';
import { DrawerService } from '../../../../shared/services/drawer.service';

@Component({
  selector: 'usuarios-filter-grupos-drawer',
  templateUrl: './usuarios-filter-grupos-drawer.component.html',
})
export class UsuariosFilterGruposDrawer {
  constructor(
    public drawerService: DrawerService
  ) {}
}
