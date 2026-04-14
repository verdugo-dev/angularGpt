import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessage } from '@components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '@components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '@components/typingLoader/typingLoader';

@Component({
  selector: 'app-ortography-page',
  imports: [ChatMessage, MyMessage, TypingLoader],
  templateUrl: './ortographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPage {

}
