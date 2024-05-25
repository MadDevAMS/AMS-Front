import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { RegisterFormService } from '../services/register-form.service';
import { AuthModule } from '../auth.module';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [
    AuthModule
  ],
  templateUrl: 'register.page.html',
})
export class RegisterPage {
  @ViewChild('stepper') stepper!: MatStepper;

  hide = true;

  constructor(
    public serviceForm: RegisterFormService
  ) { }

  volver() {
    this.stepper.previous()
  }

  submit() {
    if (this.stepper.selectedIndex < this.stepper.steps.length && !this.serviceForm.formUser.invalid) {
      this.stepper.next()
    } else if (this.stepper.selectedIndex === this.stepper.steps.length - 1) {
      this.serviceForm.register()  
    }
  }
}
