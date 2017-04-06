import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {ChatService} from './shared/services/chat.service';
import {SocketService} from './shared/services/socket.service';
import { ToArrayPipe } from './shared/pipes/to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ChatService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
