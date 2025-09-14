import { Module } from '@nestjs/common';
import { ApiConfigService } from 'src/env/api.service';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService, ApiConfigService, PrismaService],
})
export class CategoriesModule {}
