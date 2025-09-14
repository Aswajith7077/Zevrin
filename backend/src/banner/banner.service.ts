import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { GetBannersDto } from './dtos/fetch_banners.dto';

@Injectable()
export class BannerService {
  constructor(private prismaService: PrismaService) {}

  public async getBanners(getBannerConfig: GetBannersDto) {
    const result = await this.prismaService.banner.findMany({
      select: {
        title: getBannerConfig.title,
        description: getBannerConfig.description,
        url: getBannerConfig.url,
        createdAt: getBannerConfig.createdAt,
        updatedAt: getBannerConfig.updatedAt,
        validityDays: getBannerConfig.validityDays,
        expiresAt: getBannerConfig.expiresAt,
        bannerImage: {
          select: {
            id: true,
            url: getBannerConfig.bannerImageUrl,
          },
        },
      },
    });
    console.log('Query for Banners: ', result);
    return result;
  }
}
