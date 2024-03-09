import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { ContactWindowComponent } from './components/contact/contact-window/contact-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ChatWindowComponent,
    ContactWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-app-fronend';
}
