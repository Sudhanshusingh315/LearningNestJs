import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/creat-user.dto';
@Controller('users')
export class UsersController {
  @Get() // Get /users/
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(`You need to sort with ${sortBy}`);
    return { username: 'Anson', email: 's826063@gmail.com' };
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Anson',
        email: 's826063@gmail.com',
        post: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
    ];
  }

  @Get('post/comments')
  getUserPostComments() {
    return {
      id: 1,
      title: 'Post 1',
      comments: [],
    };
  }

  @Post('posts') // Post /users/posts
  //   you should now put empty objects, you use dto and validation here

  // there is also one another way to doing this that is
  //   @UsePipes(new ValidationPipe())
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return id;
  }
}
