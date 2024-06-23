import { ComponentType } from '@angular/cdk/portal';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private viewContainerRef!: ViewContainerRef;
  drawerOpen!: boolean

  setViewContainerRef(vcr: ViewContainerRef) {
    this.viewContainerRef = vcr;
  }

  close() {
    if (this.viewContainerRef) {
      setTimeout(() => {
        this.viewContainerRef.clear();
      }, 300);
    }
    this.drawerOpen = false
  }

  open<T>(comp: ComponentType<T>) {
    this.drawerOpen = !this.drawerOpen
    this.viewContainerRef.createComponent(comp)
  }
}