import { IsEmail, IsEnum } from 'class-validator';
export class CreateUserDto {
  name: string;
  @IsEmail()
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
