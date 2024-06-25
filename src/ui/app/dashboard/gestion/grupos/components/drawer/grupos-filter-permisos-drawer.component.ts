import { Component } from '@angular/core';
import { DrawerService } from '../../../../shared/services/drawer.service';

@Component({
  selector: 'grupos-filter-permisos-drawer',
  templateUrl: './grupos-filter-permisos-drawer.component.html',
})
export class GruposFilterPermisosDrawer {
  constructor(
    public drawerService: DrawerService
  ) {}
}
