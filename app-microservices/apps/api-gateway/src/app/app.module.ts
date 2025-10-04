import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DEALS_PACKAGE_NAME } from '@proto/deals';
import { join } from 'path';
import { DealController } from './deals/deal.controller';
import { AuthController } from './auth/auth.controller';
import { AUTH_PACKAGE_NAME } from '@proto/auth';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DEALS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: DEALS_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/deals.proto'),
        },
      },
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/auth.proto'),
        },
      },
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [AppController, DealController, AuthController],
  providers: [AppService],
})
export class AppModule {}
