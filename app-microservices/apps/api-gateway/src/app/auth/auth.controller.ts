import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  ChangePasswordRequest,
  LoginRequest,
  LogoutRequest,
  RefreshTokenRequest,
  ValidateTokenRequest,
} from '@proto/auth';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private authService: AuthServiceClient;
  constructor(@Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    // Initialization logic if needed
    this.authService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  @Post('login')
  async handleLogin(@Body() request: LoginRequest) {
    return this.authService.login(request);
  }

  @Post('validate')
  async handleValidate(@Body() request: ValidateTokenRequest) {
    return this.authService.validateToken(request);
  }

  @Post('refresh')
  async handleRefresh(@Body() request: RefreshTokenRequest) {
    return this.authService.refreshToken(request);
  }

  @Post('logout')
  async handleLogout(@Body() logoutRequest: LogoutRequest) {
    return this.authService.logout(logoutRequest);
  }

  @Post('change-password')
  async handleChangePassword(
    @Body()
    changePasswordRequest: ChangePasswordRequest
  ) {
    return this.authService.changePassword(changePasswordRequest);
  }
}
