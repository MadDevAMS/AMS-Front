import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'form-layout',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './form.layout.html',
})
export class FormLayout {

  @Input() title!: string
  @Input() subtitle!: string
  @Input() footerText!: string
  @Input() footerTextLink!: string
  @Input() footerLinkRouter!: string
  @Input() submitText!: string

  @ContentChild('inputs') inputs!: TemplateRef<any>;

}
