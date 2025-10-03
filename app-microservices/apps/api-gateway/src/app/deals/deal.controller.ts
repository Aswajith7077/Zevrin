import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClientGrpc, ClientKafka } from '@nestjs/microservices';
import {
  Deal,
  DEALS_PACKAGE_NAME,
  DEALS_SERVICE_NAME,
  DealsServiceClient,
} from '@proto/deals';

@Controller('deal')
export class DealController implements OnModuleInit {
  private dealsService: DealsServiceClient;
  constructor(
    @Inject(DEALS_PACKAGE_NAME) private client: ClientGrpc,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka
  ) {}

  onModuleInit() {
    this.dealsService =
      this.client.getService<DealsServiceClient>(DEALS_SERVICE_NAME);
  }

  @Get('list')
  listDeals(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string
  ) {
    return this.dealsService.listDeals({
      page: Number(page),
      pageSize: Number(pageSize),
    });
  }

  @Get(':id')
  getDeals(@Param('id') id: string) {
    return this.dealsService.getDeal({ id });
  }

  @Post('create')
  createDeal(@Body() deal: Deal) {
    this.kafkaClient.emit('deals_created', {
      id: deal.id,
      title: deal.title,
      description: deal.description,
      price: deal.price,
    });
    console.log('[Deals-Service] Deal creation event emitted to Kafka', deal);
    return { message: 'Deal creation in process', deal: deal };
  }
}
