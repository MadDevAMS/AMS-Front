import { NgModule } from '@angular/core';
import { ChatDomainModule } from '@domain/chat/chat.domain.module';
import { SendMessageUsecase } from './usecases/send-message.usecase';
import { ChatRepository } from './repository/chat.repository';

@NgModule({
  declarations: [],
  imports: [ ChatDomainModule ],
  exports: [],
  providers: [
    {
      provide: SendMessageUsecase,
      useFactory: (chatRepository: ChatRepository) => new SendMessageUsecase(chatRepository),
      deps: [ChatRepository]
    }
  ],
})
export class ChatDataModule {}