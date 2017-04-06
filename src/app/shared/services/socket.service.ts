import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

const SocketPort = '8080';

@Injectable()
export class SocketService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:8080', {
      port: SocketPort
    });
  }

  public on(event: string, callback: Function) {
    this.socket.on(event, callback);
  }
}
