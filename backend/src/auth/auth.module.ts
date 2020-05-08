import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../user/users.service';
import User from '../user/user.entity';
import { JwtModule } from '@nestjs/jwt';

import { config } from 'dotenv';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
