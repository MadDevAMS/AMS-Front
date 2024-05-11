import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: 'login.page.html',
})
export class LoginPage {
  hide = true;

  formUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  hasError(field: string, type: string) {
    return this.formUser.get(field)?.hasError(type);
  }

  login() {
    if (this.formUser.invalid) {
      Object.keys(this.formUser.controls).forEach((c) => {
        console.log(this.formUser.get(c)?.errors);
      });
    } else {
      console.log(this.formUser.value);
    }
  }
}
