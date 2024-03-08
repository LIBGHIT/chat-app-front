import { Component } from '@angular/core';
import { SingleContactComponent } from '../single-contact/single-contact.component';

@Component({
  selector: 'app-contact-window-body',
  standalone: true,
  imports: [SingleContactComponent],
  templateUrl: './contact-window-body.component.html',
  styleUrl: './contact-window-body.component.scss'
})
export class ContactWindowBodyComponent {

}
