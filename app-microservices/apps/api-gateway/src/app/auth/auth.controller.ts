import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME, AuthServiceClient } from '@proto/auth/services';
import { LoginRequest, LoginResponse } from '@proto/auth/messages/login';
import { Observable } from 'rxjs';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private authService: AuthServiceClient;
  constructor(@Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    // Initialization logic if needed
    this.authService = this.client.getService<AuthServiceClient>('AuthService');
  }

  @Post('login')
  handleLogin(
    @Body() loginCredentials: LoginRequest
  ): Observable<LoginResponse> {
    const result = this.authService.login(loginCredentials);
    console.log('Login result:', result);
    return result;
  }
}
