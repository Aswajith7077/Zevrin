import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { GetCategoriesDto } from './dtos/fetch-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  public async getCategories(getCategoriesConfig: GetCategoriesDto) {
    const categories = await this.prismaService.category.findMany({
      select: {
        name: getCategoriesConfig.name,
        url: getCategoriesConfig.url,
        subCategories: {
          select: {
            name: getCategoriesConfig.subCategoriesName,
            url: getCategoriesConfig.subCategoriesUrl,
            categoryImage: {
              select: {
                url: getCategoriesConfig.categoryImageUrl,
              },
            },
          },
        },
      },
    });

    console.log('Queried All Categories: ', categories);
    return categories;
  }
}
