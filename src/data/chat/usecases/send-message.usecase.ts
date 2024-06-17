import { Injectable } from '@angular/core';
import { UseCase } from '@base/use-case';
import { Observable } from 'rxjs';
import { ChatRepository } from '../repository/chat.repository';
import { IChatMessageModel } from '../models/message.model';
import { ChatCompletion } from 'openai/resources';

@Injectable({
  providedIn: 'platform'
})
export class SendMessageUsecase implements UseCase<IChatMessageModel, ChatCompletion> {
  constructor(private chatRepository: ChatRepository) {}

  execute(params: IChatMessageModel): Observable<ChatCompletion> {
    return this.chatRepository.sendMessage(params);
  }
}