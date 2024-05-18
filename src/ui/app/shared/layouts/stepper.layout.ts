import { Component } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'stepper-layout',
  standalone: true,
  templateUrl: './stepper.layout.html',
  imports: [NgTemplateOutlet, CdkStepperModule, CommonModule],
  providers: [{ provide: CdkStepper, useExisting: StepperLayout }],
})
export class StepperLayout extends CdkStepper {}
