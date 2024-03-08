import { Component } from '@angular/core';
import { ContactWindowHeaderComponent } from '../contact-window-header/contact-window-header.component';
import { ContactWindowBodyComponent } from '../contact-window-body/contact-window-body.component';

@Component({
  selector: 'app-contact-window',
  standalone: true,
  imports: [ContactWindowHeaderComponent, ContactWindowBodyComponent],
  templateUrl: './contact-window.component.html',
  styleUrl: './contact-window.component.scss',
})
export class ContactWindowComponent {}
