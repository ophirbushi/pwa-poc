import { Component, OnInit, OnDestroy, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MdDialog } from '@angular/material';

import { User } from './user.model';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy: EventEmitter<any> = new EventEmitter();

  @ViewChild('addUserDialog') addUserDialogTemplate: TemplateRef<AppComponent>;

  logins: string[] = [];
  users: User[] = [];

  constructor(
    private dialog: MdDialog,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.logins = this.storageService.getLogins();
    this.logins.forEach(this.getUserData);
  }

  ngOnDestroy(): void {
    this.destroy.emit();
  }

  onAddClick(): void {
    this.dialog.open(this.addUserDialogTemplate);
  }

  onAddUserSubmit(addUserInput: NgModel): void {
    const raw: string = addUserInput.value;
    const value = raw.toLowerCase();

    if (this.logins.indexOf(value) === -1) {
      this.getUserData(value);
    }

    this.dialog.closeAll();
  }

  onUserRemoveClick(userIndex: number): void {
    const user = this.users.splice(userIndex, 1)[0];
    const loginIndex = this.logins.indexOf(user.login);

    if (loginIndex > -1) {
      this.logins.splice(loginIndex, 1);
      this.storageService.setLogins(this.logins);
    }
  }

  private getUserData = (login: string): void => {
    this.userService
      .get(login)
      .takeUntil(this.destroy)
      .subscribe(this.onUserDataReceive, this.onGetUserDataError);
  }

  private onUserDataReceive = (user: User) => {
    if (this.logins.indexOf(user.login) === -1) {
      this.logins.push(user.login);
      this.storageService.setLogins(this.logins);
    }

    this.users.push(user);
  }

  private onGetUserDataError = (error: any): void => {
    alert('Could not find the requested user');
  }
}
