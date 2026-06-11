import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1'); // Agrega un prefijo global a todas las rutas, por ejemplo, /api/tasks

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
    transform: true, // Transforma los payloads a los tipos definidos en los DTOs
  }));  
  app.enableCors();

  //Configuracion de swagger docs
  const config = new DocumentBuilder()
   .setTitle('Task MAnajer API')
   .setDescription('Gestion de Tareas')
   .setVersion('1.0')
   .addTag('Tasks')
   .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);


  await app.listen(process.env.PORT ?? 3000);
  console.log("API is running on: http:localhost:3000/api/v1");
}
bootstrap();

// npm i --save @nestjs/swagger