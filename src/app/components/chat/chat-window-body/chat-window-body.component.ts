import { Component, AfterViewInit } from '@angular/core';
import { MeMessageComponent } from '../messages/me-message/me-message.component';
import { TheyMessageComponent } from '../messages/they-message/they-message.component';

@Component({
  selector: 'app-chat-window-body',
  standalone: true,
  imports: [MeMessageComponent, TheyMessageComponent],
  templateUrl: './chat-window-body.component.html',
  styleUrls: ['./chat-window-body.component.scss']
})
export class ChatWindowBodyComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.startScrollFromBottom();
  }

  startScrollFromBottom(): void {
    const chat_body = document.getElementById('chat-body') as HTMLDivElement;
    if(chat_body) {
      chat_body.scrollTop = chat_body.scrollHeight;
    }
  }
}