import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  ENV_MODE: Environment;

  @IsNumber()
  @Min(1)
  @Max(65535)
  PORT: number;
  AUTH_ENABLED: boolean;

  DATABASE_URL: string;
  POSTGRESQL_HOST: string;
  @IsNumber()
  @Min(1)
  @Max(65535)
  POSTGRESQL_PORT: number;
  POSTGRESQL_USER: string;
  POSTGRESQL_PASSWORD: string;
  POSTGRESQL_DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
