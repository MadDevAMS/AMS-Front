import { Component } from '@angular/core';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';

@Component({
  selector: 'grupos-filter-usuarios-drawer',
  templateUrl: './grupos-filter-usuarios-drawer.component.html',
})
export class GruposFilterUsuariosDrawer {
  constructor(
    public drawerService: DrawerService
  ) {}
}
