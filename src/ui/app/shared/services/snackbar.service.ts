import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISnackbarProps } from '../interfaces/snackbar-props.interface';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  open({ mensaje, type, action }: ISnackbarProps) {
    this._snackBar.open(
      mensaje, action || 'Aceptar',{
      panelClass: [
        type === 'error' ? 'error-snackbar' :
        type === 'success' ? 'success-snackbar' :
        type === 'warning' ? 'warning-snackbar' :
        'info-snackbar'
      ],
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}