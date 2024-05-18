import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRippleModule,
  MatChipsModule,
  MatCheckbox,
  MatSelectModule,
  MatExpansionModule,
  CdkStepperModule
]

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules,
  providers: [],
})
export class MaterialModule {}