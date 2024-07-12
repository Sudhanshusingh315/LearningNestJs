import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/guards/Auth.guard';
import { RolesGuard } from 'src/guards/Roles.guard';

@Controller('users')
// Using gaurds on the controller class
export class UsersController {
  @Get()
  @Roles(['ADMIN'])
  //   they are being called in order they are called
  @UseGuards(AuthGuard, RolesGuard)
  getUser() {
    return { username: 'sudhanshu' };
  }
  @Get('test')
  getUserTest() {
    return { test: 'Test!' };
  }
}
