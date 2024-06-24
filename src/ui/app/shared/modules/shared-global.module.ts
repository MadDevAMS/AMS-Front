import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayout } from '../layouts/card.layout';
import { StepperLayout } from '../layouts/stepper.layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const common = [
  CommonModule,
  CardLayout,
  StepperLayout,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: common,
  exports: common,
  providers: [],
})
export class SharedGlobalModule {}