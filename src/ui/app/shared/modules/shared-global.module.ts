import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayout } from '../layouts/card.layout';
import { StepperLayout } from '../layouts/stepper.layout';

const common = [
  CommonModule,
  CardLayout,
  StepperLayout,
]

@NgModule({
  declarations: [],
  imports: common,
  exports: common,
  providers: [],
})
export class SharedGlobalModule {}