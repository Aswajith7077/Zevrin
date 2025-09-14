import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';

@Module({
  controllers: [DealController],
  providers: [DealService],
})
export class DealModule {}
