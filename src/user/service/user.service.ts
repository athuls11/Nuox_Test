import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from '../interface/user.interface';
import { UserDto } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}
  async createUser(userDto: UserDto) {
    const user = new this.userModel({
      username: userDto.name,
      mobile: userDto.age,
      email: userDto.address,
    });

    return user.save();
  }

  async updateUser(id: string, updatedData: any) {
    return this.userModel.findOneAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
  }

  async updateUsers(filter: any, updatedData: any) {
    return this.userModel.updateMany(filter, updatedData);
  }

  async removeUser(userId: string) {
    let user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userModel.deleteOne({ _id: userId }).exec();
  }

  async findUsersByCity(city: string) {
    return this.userModel.find({ 'address.city': city }).exec();
  }

  async findUsersByState(state: string) {
    return this.userModel.find({ 'address.state': state }).exec();
  }
}
