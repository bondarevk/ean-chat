import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/services/chat.service';
import { IMessageMap } from '../shared/data/imessage-map';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  private messages: IMessageMap;

  constructor(private chatService: ChatService) {
    this.messages = chatService.getMessages();
  }

  ngOnInit() {

  }

}
