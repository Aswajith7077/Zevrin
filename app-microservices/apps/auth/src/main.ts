/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AUTH_PACKAGE_NAME } from '@proto/auth';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const url = process.env.AUTH_URL || 'localhost:5001';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: AUTH_PACKAGE_NAME,
        protoPath: join(__dirname, 'proto/auth.proto'),
        url: url,
      },
    }
  );
  await app.listen();
  Logger.log(`🚀[Auth-Service] Application is running`);
}

bootstrap();
