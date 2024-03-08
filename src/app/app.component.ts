import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeMessageComponent } from './components/chat/messages/me-message/me-message.component';
import { TheyMessageComponent } from './components/chat/messages/they-message/they-message.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { ChatWindowBodyComponent } from './components/chat/chat-window-body/chat-window-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ChatWindowBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-app-fronend';
}
