import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
    transform: true, // Transforma los payloads a los tipos definidos en los DTOs
  }));  
  app.setGlobalPrefix('api/v1'); // Agrega un prefijo global a todas las rutas, por ejemplo, /api/tasks
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();