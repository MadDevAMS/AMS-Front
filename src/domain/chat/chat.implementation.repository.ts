import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CHATGPT_KEY } from '@base/environment';
import { ChatRepository } from '@data/chat/repository/chat.repository';
import { Observable, from } from 'rxjs';
import { IChatMessageModel } from '@data/chat/models/message.model';
import OpenAI from "openai";
import { ChatCompletion } from 'openai/resources';

@Injectable({
  providedIn: 'platform'
})
export class ChatImplementationRepository extends ChatRepository {
  constructor(private http: HttpClient) { super() }

  openai = new OpenAI({
    apiKey: CHATGPT_KEY,
    dangerouslyAllowBrowser: true
  })

  override sendMessage(params: IChatMessageModel): Observable<ChatCompletion> {
    return from(
      this.openai.chat.completions.create({
        messages: [{ role: 'user', content: params.prompt }],
        model: params.model,
        max_tokens: params.max_tokens,
      })
    )
  }

}