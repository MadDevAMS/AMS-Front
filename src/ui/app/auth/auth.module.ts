import { NgModule } from '@angular/core';
import { RegisterFormService } from './services/register-form.service';
import { RegisterDataModule } from '@data/register/register.data.module';
import { FormLayout } from './layouts/form.layout';
import { AuthLayout } from './layouts/auth.layout';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '@ui/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedGlobalModule } from '@ui/shared/modules/shared-global.module';

const commonModules = [
  ReactiveFormsModule,
  FormsModule,

  MaterialModule,
  SharedGlobalModule,

  RouterOutlet,
  RouterLink,
  
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
    RegisterFormService,
  ],
})
export class AuthModule { }