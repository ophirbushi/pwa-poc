import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy: EventEmitter<any> = new EventEmitter();

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .get('ophirbushi')
      .takeUntil(this.destroy)
      .subscribe(this.onUserReceive);
  }

  ngOnDestroy(): void {
    this.destroy.emit();
  }

  private onUserReceive = (user: User) => {
    this.users.push(user);
  }
}
