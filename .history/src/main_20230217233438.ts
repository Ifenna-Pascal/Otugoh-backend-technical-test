import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Validation} form "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
