import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _open: boolean = false;
  
  get isOpen() { return this._open }

  toggleOpen() {
    this._open = !this._open
  }

}