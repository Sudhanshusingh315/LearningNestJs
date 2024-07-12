import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // Get /users/
  getUsers() {
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
  createUser() {}
}
