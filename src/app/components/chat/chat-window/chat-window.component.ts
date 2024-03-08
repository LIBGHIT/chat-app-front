import { Component } from '@angular/core';
import { ChatWindowBodyComponent } from '../chat-window-body/chat-window-body.component';
import { ChatWindowHeaderComponent } from '../chat-window-header/chat-window-header.component';
import { ChatFooterComponent } from '../chat-footer/chat-footer.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    ChatWindowBodyComponent,
    ChatWindowHeaderComponent,
    ChatFooterComponent,
  ],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent {}
