import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarModule } from '@ui/dashboard/shared/components/sidebar/sidebar.module';
import { DrawerService } from '@ui/dashboard/shared/services/drawer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GruposModule } from '../../grupos.module';
import { GrupoConfigService } from '../../services/grupo-config.service';
import { IGrupoModel } from '@data/grupos/models/grupo.model';

@Component({
  selector: 'grupos-grupo-drawer',
  standalone: true,
  imports: [
    GruposModule,
    SidebarModule,
  ],
  templateUrl: './grupo-drawer.component.html',
})
export class GruposDrawer implements OnDestroy, OnInit {
  @Input() data!: { grupo: IGrupoModel }
  private routeSubscription!: Subscription;
  linkTab = ""

  constructor(
    public serviceConfig: GrupoConfigService,
    public drawerService: DrawerService,
    private router: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    if (this.serviceConfig && this.data.grupo) {
      this.serviceConfig.initForms(this.data.grupo)
    }
  
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
