import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

// this way UpdateUserDto will have all the properties of CreatUserDto, we can add out more
export class UpdateUserDto extends PartialType(CreateUserDto) {}
