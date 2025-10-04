import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from '@proto/auth';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    // Dummy authentication logic for demonstration purposes
    if (request.username === 'user' && request.password === 'pass') {
      return {
        accessToken: 'dummy_access_token',
        refreshToken: 'dummy_refresh_token',
        message: 'Login successful',
      };
    }
    throw new Error('Invalid credentials');
  }
}
