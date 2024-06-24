import { Component, Input } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, Params, Router } from '@angular/router';

@Component({
  selector: 'dashboard-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  @Input() label!: string;
  @Input() routerLink!: string | any[];
  @Input() queryParams: Params | null = null
  @Input() routerLinkActiveOptions: { exact: boolean } | IsActiveMatchOptions = { exact: true, 
    queryParams: 'ignored',
    matrixParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  @Input() isDrawer: boolean = false
  @Input() tabLink!: string

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  toTabLink() {
    const mapQuery = this.route.snapshot.queryParams
    this.router.navigate([], {
      queryParams: {
        ...mapQuery,
        drawerTab: this.tabLink
      },
      queryParamsHandling: 'merge'
    })
  }

  isActive() {
    const { drawerTab } = this.route.snapshot.queryParams
    if (drawerTab) {
      return this.tabLink === drawerTab
    }
    return false
  }
}
