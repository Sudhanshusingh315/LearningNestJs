import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { UserSettings } from 'src/schemas/UserSettings.schema';
@Injectable()
export class UsersService {
  constructor(
    // every class will have a name property attached to it
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(UserSettings.name) private userSettings: Model<UserSettings>,
  ) {}

  async createUser(settings, createUserDto: CreateUserDto) {
    const settingsResponse = new this.userSettings(settings);

    console.log(`Settings saved ${settingsResponse}`);
    const newUser = new this.userModel({
      ...createUserDto,
      settings: settingsResponse._id,
    });
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }

  getUserById(id: string) {
    // this is async funciton
    return this.userModel.findById(id);
  }
  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const update = this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return update;
  }
  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
