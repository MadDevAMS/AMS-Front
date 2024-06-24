import { UsuariosModule } from '../usuarios.module';
import { ActivatedRoute } from '@angular/router';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { UsuarioDrawer } from '../components/drawer/usuario-drawer.component';
import { Subscription } from 'rxjs';
import { UsuarioConfigService } from '../services/usuario-config.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'usuarios-page',
  imports: [
    UsuariosModule,
  ],
  standalone: true,
  templateUrl: './usuarios.page.html',
})
export class UsuariosPage implements OnDestroy {
  private drawerDisponibleSubscription!: Subscription;

  constructor(
    private servicioConf: UsuarioConfigService,
    public drawerService: DrawerService,
    private route: ActivatedRoute
  ) { 
    this.drawerDisponibleSubscription = this.drawerService.onDisponible().subscribe({
      next: () => {
        const { drawer } = this.route.snapshot.queryParams
        if (drawer && this.servicioConf.usuario) {
          this.drawerService.open(UsuarioDrawer)
        }
      }
    })
  }

  ngOnDestroy(): void {
    if (this.drawerDisponibleSubscription) {
      this.drawerDisponibleSubscription.unsubscribe()
    }
  }

}