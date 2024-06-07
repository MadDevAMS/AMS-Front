import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CamelCaseInterceptor } from '@base/interceptors/cammel-case.interceptor';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [ HttpClientModule ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CamelCaseInterceptor,
      multi: true,
    },
  ],
})
export class SharedDomainModule {}