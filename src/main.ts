import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:123456@localhost:5672'],
      queue: 'notification',
      queueOptions: { durable: true },
    },
  });

  await app.listen();
  console.log('Notification service is running');
}

bootstrap();
