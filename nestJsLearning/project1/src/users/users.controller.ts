import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

// @ is a decorate in nesjs, this just means to handle users route
// waterfall routes
@Controller('users')
export class UsersController {
  // this is important nestjs is using this a singelton design
  constructor(private readonly userService: UsersService) {}
  /*
    GET /users
    GET /users/:id
    POST /users 
    PATCH /users/:id
    DELETE /users/:id
    */
  // make role an enum;
  @Get() // GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }
  /* If you have a dynamic and a static route that follows the same routing pattern,
    STATIC ROUTE, will go before the dynamic route
    because order does matter here

  */

  // No methods for this will be created in provider, since this jusst a demo to show that all static routes should come before dynamic routes
  @Get('interns') // Get  /users/inters
  findAllInters() {
    return [];
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post() // Post /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.create(user);
  }

  @Patch(':id') // Patch /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id') // Delete /users/:id
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
