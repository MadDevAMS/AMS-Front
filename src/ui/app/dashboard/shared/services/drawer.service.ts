import { ComponentType } from '@angular/cdk/portal';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private viewContainerRef!: ViewContainerRef;
  drawerOpen: boolean = false;
  private drawerDisponibleSubject = new Subject<void>();
  private drawerCloseSubject = new Subject<void>();

  setViewContainerRef(vcr: ViewContainerRef) {
    if (vcr) {
      this.viewContainerRef = vcr;
      this.drawerDisponibleSubject.next()
    }
  }

  close() {
    if (this.viewContainerRef) {
      this.drawerCloseSubject.next();
      setTimeout(() => {
        this.viewContainerRef.clear();
      }, 300);
    }
    this.drawerOpen = false;
  }

  open<T>(comp: ComponentType<T>) {
    this.drawerOpen = true;
    this.viewContainerRef.createComponent(comp);
  }

  onClose(): Observable<void> {
    return this.drawerCloseSubject.asObservable();
  }

  onDisponible(): Observable<void> {
    return this.drawerDisponibleSubject.asObservable();
  }
}
