import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dashboard-sidebar-link-group',
  templateUrl: './sidebar-link-group.component.html',
})
export class SidebarLinkGroupComponent implements OnInit {
  expanded = false;
  @Input() label!: string;
  @Input() prefix!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfActive();
    });

    this.checkIfActive();
  }

  private checkIfActive() {
    const currentUrl = this.router.url;
    
    this.expanded = currentUrl.startsWith(this.prefix);
  }
}
