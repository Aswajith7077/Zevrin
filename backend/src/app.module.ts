import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { AuthModule } from './common/auth/auth.module';
import { UsersModule } from './users/users.module';
import { ApiConfigService } from './env/api.service';
import { ProfileModule } from './profile/profile.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './common/prisma/prisma.service';
import { BannerModule } from './banner/banner.module';
import { DealModule } from './deal/deal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HealthModule,
    AuthModule,
    UsersModule,
    ConfigModule,
    ProfileModule,
    CategoriesModule,
    BannerModule,
    DealModule,
  ],
  controllers: [AppController],
  providers: [AppService, ApiConfigService, PrismaService],
})
export class AppModule {}
