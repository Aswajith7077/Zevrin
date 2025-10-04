import { Controller } from '@nestjs/common';
import {
  DealsServiceController,
  DealsServiceControllerMethods,
  GetDealRequest,
  GetDealResponse,
  ListDealsRequest,
  ListDealsResponse,
} from '@proto/deals';
import { Observable } from 'rxjs';

@Controller('deals')
@DealsServiceControllerMethods()
export class DealsController implements DealsServiceController {
  getDeal(
    request: GetDealRequest
  ): Promise<GetDealResponse> | Observable<GetDealResponse> | GetDealResponse {
    return {
      deal: {
        id: request.id,
        title: 'Sample Deal',
        description: 'This is a sample deal description',
        price: 99.99,
        currency: 'USD',
      },
    };
  }
  listDeals(
    request: ListDealsRequest
  ):
    | Promise<ListDealsResponse>
    | Observable<ListDealsResponse>
    | ListDealsResponse {
    if (request.pageSize < 0) {
      throw new Error('pageSize must be non-negative');
    }
    if (request.page < 0) {
      throw new Error('page must be non-negative');
    }
    return {
      deals: [
        {
          id: '1',
          title: 'Deal 1',
          description: 'Description for Deal 1',
          price: 49.99,
          currency: 'USD',
        },
        {
          id: '2',
          title: 'Deal 2',
          description: 'Description for Deal 2',
          price: 79.99,
          currency: 'USD',
        },
      ],
      totalCount: 2,
    };
  }
}
