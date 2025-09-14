import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ApiConfigService } from './env/api.service';
import { ConsoleLogger, ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: process.env.APP_NAME || 'NestJS App',
    }),
  });
  const config = new DocumentBuilder()
    .setTitle('Zevrin API Documentation')
    .setDescription(
      `Zevrin is a modern frontend application deployment platform designed to simplify the process of building, deploying, and scaling applications. It provides developers with a streamlined workflow for managing projects, automating deployments, and ensuring reliability in production environments.`,
    )
    .setVersion('1.0')
    .addTag('api')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: 'docs-json',
  });

  const apiConfigService = app.get(ApiConfigService);
  const port = apiConfigService.getEnvDetails.PORT;

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // ensures query -> DTO instance
    }),
  );
  await app.listen(port);
}

void bootstrap();
