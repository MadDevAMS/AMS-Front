import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar-group',
  templateUrl: './sidebar-group.component.html',
})
export class SidebarGroupComponent {
  @Input() titulo: string = "";
}
