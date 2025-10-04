/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DEALS_PACKAGE_NAME } from '@proto/deals';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: DEALS_PACKAGE_NAME,
        protoPath: join(__dirname, 'proto/deals.proto'),
      },
    }
  );

  const kafkaApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'deals-service',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'deals-consumer',
        },
      },
    }
  );

  await Promise.all([app.listen(), kafkaApp.listen()]);
  Logger.log(`🚀[Deals-Service] Application is running on gRPC connection`);
}

bootstrap();
