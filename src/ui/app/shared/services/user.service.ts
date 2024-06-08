import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode'

@Injectable({ 
  providedIn: 'root' 
})
export class UserService {
  constructor(
  ) { 
    this.getPermission()
  }

  getPermission() {
    const token = localStorage.getItem('token')
    if (token) {
      const decode = jwtDecode(token)
      console.log(decode);
    }
  }

  getIdEntidad() {
    const token = localStorage.getItem('token')
    if (token) {
      const decode = jwtDecode<any>(token)
      return decode?.IdEntidad
    }
  }

}