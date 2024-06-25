import { Component, OnDestroy } from '@angular/core';
import { SidebarModule } from '@ui/dashboard/shared/components/sidebar/sidebar.module';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GruposModule } from '../../grupos.module';
import { GrupoConfigService } from '../../services/grupo-config.service';

@Component({
  selector: 'grupos-grupo-drawer',
  standalone: true,
  imports: [
    GruposModule,
    SidebarModule,
  ],
  templateUrl: './grupo-drawer.component.html',
})
export class GruposDrawer implements OnDestroy {
  linkTab = ""
  private routeSubscription: Subscription;

  constructor(
    public grupoService: GrupoConfigService,
    public drawerService: DrawerService,
    private router: ActivatedRoute
  ) {
    this.routeSubscription = this.router.queryParams.subscribe(params => {
      this.linkTab = params['drawerTab']
    })
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
