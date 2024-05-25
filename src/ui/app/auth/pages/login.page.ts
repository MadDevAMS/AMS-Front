import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthModule } from '../auth.module';
import { LoginFormService } from '../services/login-form.service';

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

  constructor(
    public serviceForm: LoginFormService
  ) { }
}
