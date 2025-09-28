import { Controller, Get, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { GetCategoriesDto } from './dtos/fetch-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  public async fetchCategories(@Query() categoriesConfig: GetCategoriesDto) {
    return await this.categoriesService.getCategories(categoriesConfig);
  }
}
