import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { IMessage } from '../data/imessage';
import {IMessageMap} from '../data/imessage-map';

@Injectable()
export class ChatService {

  private messages: IMessageMap = {};

  constructor(private socketService: SocketService ) {
    socketService.on('connect', () => {

    });
    socketService.on('message', (message: IMessage) => {
      this.messages[message.id] = message;
    });
  }

  public getMessages(): IMessageMap {
    return this.messages;
  }

}
