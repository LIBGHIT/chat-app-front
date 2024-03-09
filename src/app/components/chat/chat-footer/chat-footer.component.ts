import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat-footer',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './chat-footer.component.html',
  styleUrl: './chat-footer.component.scss',
})
export class ChatFooterComponent {
  faPaperPlane = faPaperPlane;

  adjustTextareaHeight(): void {
    const textarea = document.getElementById('message') as HTMLTextAreaElement;
    const maxHeight = 120;
  
    // Reset the textarea height to auto to allow it to shrink, then readjust based on content
    textarea.style.height = 'auto';
    const currentHeight = textarea.scrollHeight;
  
    if (currentHeight < maxHeight) {
      textarea.style.height = currentHeight + 'px';
      textarea.style.overflowY = 'hidden';
    } else {
      textarea.style.overflowY = 'auto';
      // Explicitly set to maxHeight if currentHeight exceeds it
      textarea.style.height = maxHeight + 'px';
    }
  }
}
