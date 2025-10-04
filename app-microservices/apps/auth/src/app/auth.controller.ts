import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
} from '@proto/auth/services';
import { LoginRequest, LoginResponse } from '@proto/auth/messages/login';
import {
  RefreshTokenRequest,
  RefreshTokenResponse,
} from '@proto/auth/messages/refresh';
import {
  ValidateTokenRequest,
  ValidateTokenResponse,
} from '@proto/auth/messages/validate';
import { LogoutRequest, LogoutResponse } from '@proto/auth/messages/logout';
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
} from '@proto/auth/messages/change_password';
import { AppService } from './app.service';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly appService: AppService) {}
  async login(request: LoginRequest): Promise<LoginResponse> {
    return this.appService.login(request);
  }

  async refreshToken(
    request: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    // Implement your refresh token logic here
    if (request.refreshToken === 'valid_refresh_token') {
      return {
        accessToken: 'new_access_token',
        message: 'Token refreshed successfully',
      };
    }
    return {
      accessToken: 'string',
      message: 'Invalid refresh token',
    };
  }

  async validateToken(
    request: ValidateTokenRequest
  ): Promise<ValidateTokenResponse> {
    // Implement your token validation logic here
    if (request.accessToken === 'valid_access_token') {
      return {
        isValid: true,
        message: 'string',
      };
    }
    return {
      isValid: false,
      message: 'Invalid token',
    };
  }

  async logout(request: LogoutRequest): Promise<LogoutResponse> {
    // Implement your logout logic here
    if (request.refreshToken === 'valid_access_token') {
      return {
        message: 'Logout successful',
      };
    }
    return {
      message: 'Invalid refresh token',
    };
  }

  async changePassword(
    request: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> {
    // Implement your change password logic here
    if (
      request.username === 'admin' &&
      request.oldPassword === 'password' &&
      request.newPassword === 'new_password'
    ) {
      return {
        message: 'Password changed successfully',
      };
    }
    return {
      message: 'Invalid credentials or new password',
    };
  }
}
