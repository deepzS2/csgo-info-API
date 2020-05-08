import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../../user/user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  @ApiResponse({
    status: 404,
    description: "User doesn't exists",
  })
  @ApiResponse({
    status: 401,
    description: 'Incorrect password',
  })
  async login(@Body() user: CreateUserDTO): Promise<any> {
    return this.authService.login(user);
  }

  @Post('register')
  @ApiResponse({
    status: 406,
    description: 'User already exists',
  })
  async register(@Body() user: CreateUserDTO): Promise<any> {
    return this.authService.register(user);
  }
}
