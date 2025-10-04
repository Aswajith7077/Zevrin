import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { Deal } from '@proto/deals/messages/common';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('deals_created')
  handleDealCreated(data: Deal) {
    console.log('[Payments-Service]: Deal Created for ', data);
    // Handle the event (e.g., save to database, send email, etc.)
    this.kafkaService.emit('payment_succeed', data);
  }
}
