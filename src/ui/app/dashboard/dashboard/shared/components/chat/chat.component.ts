import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SendMessageUsecase } from '@data/chat/usecases/send-message.usecase';

interface IConversationPrompt {
  role: 'user' | 'assistant',
  message: string
}

@Component({
  selector: 'model-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  @Input() title!: string
  @ViewChild('boxMessage') boxMessage!: ElementRef

  conversation: IConversationPrompt[] = []
  state: 'loading' | 'success' | 'error' = 'success'
  message = new FormControl('')

  constructor(private sendMessageUsecase: SendMessageUsecase) { }

  scrollToBottom(): void {
    const box = this.boxMessage?.nativeElement;
    if (box) {
      setTimeout(() => {
        box.scrollTop = box.scrollHeight;
      }, 0);
    }
  }

  enviarMensaje() {
    if (this.message.value) {
      this.state = 'loading'
      this.conversation.push({
        role: 'user',
        message: this.message.value
      })
      this.sendMessageUsecase.execute({
        model: 'gpt-3.5-turbo-0125',
        prompt: this.message.value,
        max_tokens: 384,
      }).subscribe({
        next: (res) => {
          if (res.choices[0].message.content) {
            res.choices[0].message
            this.conversation.push({
              role: 'assistant',
              message: res.choices[0].message.content
            })
            this.scrollToBottom()
          }
          this.state = 'success'
          this.message.setValue('')
        },
        error: (err) => {
          this.state = 'error'
          this.message.setValue('')
        }
      })
    }
  }
}
