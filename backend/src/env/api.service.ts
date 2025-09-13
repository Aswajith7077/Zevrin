import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface DbConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

interface EnvConfig {
  AUTH_ENABLED: boolean;
  ENV_MODE: string;
  PORT: number;
  APP_NAME: string;
  APP_VERSION: string;
  POSTGRESQL_HOST: string;
  POSTGRESQL_PORT: number;
  POSTGRESQL_USER: string;
  POSTGRESQL_PASSWORD: string;
  POSTGRESQL_DB_NAME: string;
}

interface EnvDetails {
  ENV_MODE: string;
  PORT: number;
  AUTH_ENABLED: boolean;
}

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService<EnvConfig, true>) {}

  get isAuthEnabled(): boolean {
    return this.configService.get<string>('AUTH_ENABLED') === 'true';
  }

  get getDbConfig(): DbConfig {
    return {
      host: this.configService.get<string>('POSTGRESQL_HOST', { infer: true }),
      port: this.configService.get<number>('POSTGRESQL_PORT', {
        infer: true,
      }) as number,
      username: this.configService.get<string>('POSTGRESQL_USER', {
        infer: true,
      }),
      password: this.configService.get<string>('POSTGRESQL_PASSWORD', {
        infer: true,
      }),
      database: this.configService.get<string>('POSTGRESQL_DB_NAME', {
        infer: true,
      }),
    };
  }

  get getEnvDetails(): EnvDetails {
    return {
      ENV_MODE: this.configService.get<string>('ENV_MODE', { infer: true }),
      PORT: this.configService.get<number>('PORT', { infer: true }) as number,
      AUTH_ENABLED:
        this.configService.get<string>('AUTH_ENABLED', { infer: true }) ===
        'true',
    };
  }

  get getAppDetails(): { name: string; version: string } {
    return {
      name: this.configService.get<string>('APP_NAME', { infer: true }),
      version: this.configService.get<string>('APP_VERSION', { infer: true }),
    };
  }
}
