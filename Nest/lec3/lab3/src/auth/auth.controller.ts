import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto } from './dtos/auth-credentials.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { LoginVM } from './vms/login-vm';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: HttpStatus.CREATED, description: 'User successfully signed up' })
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @ApiResponse({ status: HttpStatus.OK, type: LoginVM, description: 'User successfully signed in' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Login details invalid' })
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() loginDto: LoginDto): Promise<LoginVM> {
    const loginResponse = await this.authService.signIn(loginDto);
    if (!loginResponse) {
      throw new UnauthorizedException('Login Credentials Invalid');
    }
    return loginResponse;
  }
}
