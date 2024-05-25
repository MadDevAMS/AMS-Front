import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  @Input() label!: string;
  @Input() routerLink!: string | any[];
  @Input() routerLinkActiveOptions: { exact: boolean } = { exact: true };
}
