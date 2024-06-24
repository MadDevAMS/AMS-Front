import { Component, OnDestroy } from '@angular/core';
import { UsuariosModule } from '../../usuarios.module';
import { SidebarModule } from '@ui/dashboard/shared/components/sidebar/sidebar.module';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { UsuarioConfigService } from '../../services/usuario-config.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'usuarios-usuario-drawer',
  standalone: true,
  imports: [
    UsuariosModule,
    SidebarModule,
  ],
  templateUrl: './usuario-drawer.component.html',
})
export class UsuarioDrawer implements OnDestroy {
  linkTab = ""
  private routeSubscription: Subscription;

  constructor(
    public usuarioService: UsuarioConfigService,
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
