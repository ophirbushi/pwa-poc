import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import 'rxjs/add/operator/takeUntil';
import 'hammerjs';

import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    StorageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
