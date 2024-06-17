import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatRepository } from '@data/chat/repository/chat.repository';
import { ChatImplementationRepository } from './chat.implementation.repository';
import { SharedDomainModule } from '@domain/shared-domain.module';

@NgModule({
  declarations: [],
  imports: [ SharedDomainModule ],
  exports: [],
  providers: [
    {
      provide: ChatRepository,
      useFactory: (httpClient: HttpClient) => new ChatImplementationRepository(httpClient),
      deps: [HttpClient]
    },
  ],
})
export class ChatDomainModule {}