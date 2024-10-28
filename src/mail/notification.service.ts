import { Injectable, OnModuleInit } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class NotificationService implements OnModuleInit {
  onModuleInit() {
    console.log('NotificationService initialized');
  }

  async processNotification(data: any) {
    console.log('Processing notification:', data);
  }

  @MessagePattern('register')
  async handleNotification(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('Received notification:', data);

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg); // Confirma a mensagem
  }
}
