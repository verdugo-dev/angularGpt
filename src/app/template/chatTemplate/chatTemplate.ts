import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessage } from '@components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '@components/chat-bubbles/myMessage/myMessage';
import { TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile';
import { TextMessageBoxEvent, TextMessageBoxSelect } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect';
import { TypingLoader } from '@components/typingLoader/typingLoader';
import { Message } from 'src/app/interfaces/message.interface';
import { OpenAiService } from 'src/app/presentation/services/openai.service';
import { TextMessageBox } from "@components/text-boxes/textMessageBox/textMessageBox";

@Component({
  selector: 'app-chat-template',
  imports: [
    ChatMessage,
    MyMessage,
    TypingLoader,
    ReactiveFormsModule,
    // TextMessageBoxSelect,
    TextMessageBox
],
  templateUrl: './chatTemplate.html',
  styleUrl: './chatTemplate.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplate {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService);

  handleMessage(prompt: string) {
    console.log({prompt})
  }


}
