import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { CUSTOMER_CONSUMER } from './providers/kafka/consumers/consumers';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: true });

  const appMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, CUSTOMER_CONSUMER);

  appMicroservice.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await appMicroservice.listen();
  // await app.listen(3002);
}
bootstrap();
