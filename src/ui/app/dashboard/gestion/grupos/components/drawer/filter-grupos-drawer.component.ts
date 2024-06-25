import { Component } from '@angular/core';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';

@Component({
  selector: 'grupos-filter-grupos-drawer',
  templateUrl: './filter-grupos-drawer.component.html',
})
export class GruposFilterGruposDrawer {
  constructor(
    public drawerService: DrawerService
  ) {}
}
