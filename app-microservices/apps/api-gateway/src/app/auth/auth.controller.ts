import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTH_PACKAGE_NAME,
  AuthServiceClient,
  LoginRequest,
} from '@proto/auth';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private authService: AuthServiceClient;
  constructor(@Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    // Initialization logic if needed
    this.authService = this.client.getService<AuthServiceClient>('AuthService');
  }

  @Post('login')
  async handleLogin(@Body() loginCredentials: LoginRequest) {
    return this.authService.login(loginCredentials);
  }
}
