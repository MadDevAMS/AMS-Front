import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthModule } from '../auth.module';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    AuthModule
  ],
  templateUrl: 'login.page.html',
  schemas: [NO_ERRORS_SCHEMA],
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
