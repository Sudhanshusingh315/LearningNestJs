import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Katto singh',
      email: 'Kattosingh@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Hippo Hoshiyar',
      email: 'Hippohoshiya@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Oink Pig',
      email: 'oink@pig.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Bubble',
      email: 'BulbulBubble@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'LeaderOfMeow',
      email: 'LeaderOfMeow@gmail.com',
      role: 'ADMIN',
    },
  ];

  //   Creating all the methods

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        throw new NotFoundException('User Role Not Found');
      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((person) => person.id === id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      //   using another method
      return this.findOne(id);
    });
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
