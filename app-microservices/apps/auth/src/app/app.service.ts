import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequest, LoginResponse } from '@proto/auth/messages/login';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    // Dummy authentication logic for demonstration purposes
    if (request.username === 'admin' && request.password === 'password') {
      const payload = {
        sub: '123',
        username: request.username,
        roles: ['user'],
      };

      const accessToken = this.jwtService.sign(payload, {
        secret: 'your_jwt_secret', // Use a secure secret in production
        expiresIn: '1h',
      });

      const refreshToken = this.jwtService.sign(payload, {
        secret: 'your_refresh_token_secret', // Use a secure secret in production
        expiresIn: '7d',
      });

      return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        message: 'Login successful',
      };
    }
    throw new Error('Invalid credentials');
  }
}
