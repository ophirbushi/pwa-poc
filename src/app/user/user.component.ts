import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'pwp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Output() removeClick: EventEmitter<any> = new EventEmitter();

  onVisitPageClick(): void {
    window.open(this.user.html_url, '_blank');
  }

  onRemoveClick(): void {
    this.removeClick.emit(this.user);
  }
}
