import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  ChangePasswordRequest,
  ChangePasswordResponse,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ValidateTokenRequest,
  ValidateTokenResponse,
} from '@proto/auth';
import { AppService } from './app.service';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly appService: AppService) {}
  async login(request: LoginRequest): Promise<LoginResponse> {
    // Implement your login logic here
    return this.appService.login(request);
  }
  
  async refreshToken(
    request: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    return this.appService.refreshToken(request);
  }

  async validateToken(
    request: ValidateTokenRequest
  ): Promise<ValidateTokenResponse> {
    return this.appService.validateToken(request);
  }

  async changePassword(
    request: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> {
    return this.appService.changePassword(request);
  }

  async logout(request: LogoutRequest): Promise<LogoutResponse> {
    return this.appService.logout(request);
  }
}
