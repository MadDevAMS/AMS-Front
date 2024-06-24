import { Component } from '@angular/core';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';

@Component({
  selector: 'usuarios-filter-usuarios-drawer',
  templateUrl: './usuarios-filter-usuarios-drawer.component.html',
})
export class UsuariosFilterUsuariosDrawer {
  constructor(
    public drawerService: DrawerService
  ) {}
}
