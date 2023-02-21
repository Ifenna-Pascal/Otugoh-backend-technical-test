import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableVersioning({
  //   defaultVersion: '1.0',
  //   type: VersioningType.URI,
  // });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Setup Swagger
  const document = new DocumentBuilder()
    .setTitle('Otugoh Backend Technical Test')
    .setDescription(
      'An api documentation for generating and documenting the activities of wizards and spells',
    )
    .setVersion('1.0')
    .build();
  const wizzardDescriptorDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('api', app, wizzardDescriptorDocument);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 4000);
}
bootstrap();
