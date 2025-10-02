import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsController } from './deals.controller';

@Module({
  imports: [],
  controllers: [AppController, DealsController],
  providers: [AppService],
})
export class AppModule {}
