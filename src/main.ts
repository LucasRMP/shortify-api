import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      skipMissingProperties: true,
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(3000);
}
bootstrap();
