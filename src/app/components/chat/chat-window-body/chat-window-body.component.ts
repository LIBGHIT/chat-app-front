import { Component } from '@angular/core';
import { MeMessageComponent } from '../messages/me-message/me-message.component';
import { TheyMessageComponent } from '../messages/they-message/they-message.component';

@Component({
  selector: 'app-chat-window-body',
  standalone: true,
  imports: [MeMessageComponent,
  TheyMessageComponent],
  templateUrl: './chat-window-body.component.html',
  styleUrl: './chat-window-body.component.scss'
})
export class ChatWindowBodyComponent {

}
