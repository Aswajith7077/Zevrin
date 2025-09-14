import { Module } from '@nestjs/common';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [BannerController],
  providers: [BannerService, PrismaService],
})
export class BannerModule {}
