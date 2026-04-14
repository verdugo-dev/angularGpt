import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChatMessage } from '@components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '@components/chat-bubbles/myMessage/myMessage';
import { TextMessageBox } from '@components/text-boxes/textMessageBox/textMessageBox';
import { TextMessageBoxFile, TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile';
import { TextMessageBoxEvent, TextMessageBoxSelect } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect';
import { TypingLoader } from '@components/typingLoader/typingLoader';
import { Message } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-ortography-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox, TextMessageBoxFile, TextMessageBoxSelect],
  templateUrl: './ortographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPage {
  public messages = signal<Message[]>([{text: 'Hola mundo', isGpt: false }]);
  public isLoading = signal(false);

  handleMessage(prompt: string) {
    console.log({prompt})
  }

  handleMessageWithFile({prompt, file}: TextMessageEvent) {
    console.log({prompt, file})
  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log(event)
  }


}
