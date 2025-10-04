import { Injectable } from '@nestjs/common';
import {
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

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    // Dummy authentication logic for demonstration purposes
    if (request.username === 'admin' && request.password === 'password') {
      return {
        accessToken: 'dummy_access_token',
        refreshToken: 'dummy_refresh_token',
        message: 'Login successful',
      };
    }
    return {
      accessToken: '',
      refreshToken: '',
      message: 'Invalid credentials',
    };
  }

  async refreshToken(
    request: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    // Dummy token refresh logic for demonstration purposes
    if (request.refreshToken === 'dummy_refresh_token') {
      return {
        accessToken: 'new_dummy_access_token',
        message: 'Token refreshed',
      };
    }
    return { accessToken: '', message: 'Invalid refresh token' };
  }

  async validateToken(
    request: ValidateTokenRequest
  ): Promise<ValidateTokenResponse> {
    if (request.accessToken === 'dummy_access_token') {
      return { isValid: true, message: 'Token is valid' };
    }
    return { isValid: false, message: 'Token is invalid' };
  }

  async changePassword(
    request: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> {
    if (request.username === 'user' && request.oldPassword === 'pass') {
      // In a real application, update the password in the database
      return { message: 'Password changed successfully' };
    }
    return { message: 'Invalid username or old password' };
  }

  async logout(request: LogoutRequest): Promise<LogoutResponse> {
    // In a real application, invalidate the refresh token in the database or cache
    if (request.refreshToken === 'dummy_refresh_token') {
      return { message: 'Logout successful' };
    }
    return { message: 'Invalid refresh token' };
  }
}
