import { Controller, Get, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { GetBannersDto } from './dtos/fetch_banners.dto';

@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @Get()
  public async getBanners(@Query() getBannerConfig: GetBannersDto) {
    return await this.bannerService.getBanners(getBannerConfig);
  }
}
