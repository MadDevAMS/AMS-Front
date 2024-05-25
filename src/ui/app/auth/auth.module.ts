import { NgModule } from '@angular/core';
import { RegisterFormService } from './services/register-form.service';
import { RegisterDataModule } from '@data/register/register.data.module';
import { FormLayout } from './layouts/form.layout';
import { AuthLayout } from './layouts/auth.layout';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';
import { LoginFormService } from './services/login-form.service';
import { LoginDataModule } from '@data/login/login.data.module';

const commonModules = [
  ReactiveFormsModule,
  FormsModule,

  MaterialModule,
  SharedGlobalModule,

  RouterOutlet,
  RouterLink,
  
  LoginDataModule,
  RegisterDataModule,
]

const declarations = [
  FormLayout,
  AuthLayout,
]

@NgModule({
  declarations,
  imports: commonModules,
  exports: [
    ...declarations,
    ...commonModules
  ],
  providers: [ 
    LoginFormService,
    RegisterFormService,
  ],
})
export class AuthModule { }