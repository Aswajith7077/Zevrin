import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetDealsDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Search term for deals',
    example: 'Deal A',
  })
  search?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Filter deals by status',
    example: 'active',
  })
  status?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Filter deals by type',
    example: 'typeA',
  })
  type?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Filter deals by category',
    example: 'categoryA',
  })
  category?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Sort deals by a specific field',
    example: 'createdAt',
  })
  sortBy?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: 'Sort order (asc or desc)',
    example: 'desc',
  })
  sortOrder?: 'asc' | 'desc';

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    required: false,
    description: 'Page number for pagination',
    example: 1,
  })
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    required: false,
    description: 'Number of items per page for pagination',
    example: 10,
  })
  limit?: number;
}
