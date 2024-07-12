import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    These will be the routes
    
    Get /users (to get all the users);
    Get /users/:id (to get specific user);
    Post /users (to create a user);
    Patch /users/:id (to update the user credenticals);
    Delete /users/:id (to delete the user from the database);
    
    */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }
  // this is a dynamic route and this will be written only after all the static methods have been completed
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
  //   this will only hit to /users`
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id:number,@Body() userUpdate:{})
}
