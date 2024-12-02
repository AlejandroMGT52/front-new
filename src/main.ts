import {NestFactory } from '@nestjs/core';
import { ApplicationModule } from '@angular/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function boostrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.enableCors();


  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
  .setTitle('Product example')
  .setDescription('The Produc API description')
  .setVersion('1.0')
  .addTag('product')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
boostrap();