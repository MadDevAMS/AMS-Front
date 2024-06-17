import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ChatgptInterceptor } from '@base/interceptors/chatgpt.interceptor';
import { ChatRepository } from '@data/chat/repository/chat.repository';
import { ChatImplementationRepository } from './chat.implementation.repository';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: [],
  providers: [
    {
      provide: ChatRepository,
      useFactory: (httpClient: HttpClient) => new ChatImplementationRepository(httpClient),
      deps: [HttpClient]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ChatgptInterceptor,
      multi: true,
    },
  ],
})
export class ChatDomainModule {}