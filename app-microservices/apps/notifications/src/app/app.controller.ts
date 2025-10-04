import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Deal } from '@proto/deals';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('payment_succeed')
  handleNotificationCreated(data: Deal) {
    console.log('[Notification-Service]: Payment Succeeded for ', data);
    // Handle the event (e.g., save to database, send email, etc.)
  }

  @MessagePattern('deals_created')
  handleDealCreated(data: Deal) {
    console.log('[Notification-Service]: Deal Created for ', data);
    // Handle the event (e.g., save to database, send email, etc.)
  }
}
