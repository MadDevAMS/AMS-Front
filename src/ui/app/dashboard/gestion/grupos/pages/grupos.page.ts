import { Component, OnDestroy, signal } from '@angular/core';
import { GruposModule } from '../grupos.module';
import { GrupoConfigService } from '../services/grupo-config.service';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GruposDrawer } from '../components/drawer/grupo-drawer.component';

@Component({
  selector: 'grupos-page',
  standalone: true,
  imports: [
    GruposModule,
  ],
  templateUrl: './grupos.page.html',
})
export class GruposPage implements OnDestroy {
  private drawerDisponibleSubscription!: Subscription;

  constructor(
    public servicioConf: GrupoConfigService,
    public drawerService: DrawerService,
    private route: ActivatedRoute
  ) { 
    this.drawerDisponibleSubscription = this.drawerService.onDisponible().subscribe({
      next: () => {
        const { drawer } = this.route.snapshot.queryParams
        if (drawer && this.servicioConf.grupo) {
          this.drawerService.open(GruposDrawer)
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
