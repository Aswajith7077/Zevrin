import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetCategoriesDto {
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  name: boolean = true;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  url: boolean = true;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  subCategoriesName: boolean = true;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  subCategoriesUrl: boolean = true;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  categoryImageUrl: boolean = true;
}
