import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import User from './user.entity';

@Module({
  imports: [],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
