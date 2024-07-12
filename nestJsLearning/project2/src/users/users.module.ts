import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// controller is the main part and then we inject serives
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
