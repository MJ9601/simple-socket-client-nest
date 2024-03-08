import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;
  constructor() {
    this.socketClient = io('http://localhost:3000');
  }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('connected to Gateway');
    });

    this.socketClient.on('onMessage', (payload: any) => {
      console.log(payload);
    });
  }
}
