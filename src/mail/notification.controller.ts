import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('register')
  async handleRegister(@Payload() data: any) {
    console.log('Received notification:', data);
    // Opcional: Delegue a lógica para o serviço
    await this.notificationService.processNotification(data);
  }
}
