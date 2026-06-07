import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'delete' | 'update' | 'undo' = 'success';
  @Output() close = new EventEmitter<void>();

  constructor() {
    // Automatically close after 5 seconds
    setTimeout(() => {
      this.close.emit();
    }, 5000);
  }
}
