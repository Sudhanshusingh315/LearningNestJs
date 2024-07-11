import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// modules has controllers for https and controllers has injctable services

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
