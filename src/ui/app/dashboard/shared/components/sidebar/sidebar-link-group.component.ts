import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar-link-group',
  templateUrl: './sidebar-link-group.component.html',
})
export class SidebarLinkGroupComponent {
  expanded = false
  @Input() label!: string
}
