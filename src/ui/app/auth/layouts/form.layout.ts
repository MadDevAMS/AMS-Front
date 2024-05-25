import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'form-layout',
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
