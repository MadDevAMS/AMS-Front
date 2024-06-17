import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CHATGPT_KEY } from '@base/environment';
import { ChatRepository } from '@data/chat/repository/chat.repository';
import { Observable, from, of } from 'rxjs';
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
    // return from(
    //   this.openai.chat.completions.create({
    //     messages: [{ role: 'user', content: params.prompt }],
    //     model: params.model,
    //     max_tokens: params.max_tokens,
    //   })
    // )
    return of({
      id: "chatcmpl-9apPFHmeFtVuU4vI5flJJp5VsDYBF",
      choices: [
        {
          finish_reason: "stop",
          index: 0,
          logprobs: null,
          message: {
            content: 'Hola, soy chatgpt de prueba, Hola, soy Hola, soyHola, soyHola, soyHola, soyHola, soyHola, soy',
            role: 'assistant'
          }
        }
      ],
      model: "gpt-3.5-turbo-0125",
      created: 1718564441,
      object: 'chat.completion',
      usage:  {
        completion_tokens: 11,
        prompt_tokens: 10,
        total_tokens: 21
      },
      system_fingerprint: undefined,
    } as ChatCompletion)
  }

}