import { Component, Input } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  imports: [
    NgClass,
    NgIf
  ],
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';

  close(): void {
    this.message = '';
  }
}
