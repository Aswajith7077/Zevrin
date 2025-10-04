import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginRequest,
  LoginResponse,
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
}
