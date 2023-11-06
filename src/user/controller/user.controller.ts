import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() UserDto: UserDto) {
    await this.userService.createUser(UserDto);
    return {
      success: true,
      message: 'User created successfully.',
      statusCode: HttpStatus.CREATED,
    };
  }

  @Put('update-one/:id')
  async updateOne(@Param('id') id: string, @Body() UserDto: UserDto) {
    await this.userService.updateUser(id, UserDto);
    return {
      success: true,
      message: 'User updated successfully.',
      statusCode: HttpStatus.OK,
    };
  }

  @Put('update-many')
  async updateMany(@Body() updateRequest: { filter: any; updatedData: any }) {
    await this.userService.updateUsers(
      updateRequest.filter,
      updateRequest.updatedData,
    );
    return {
      success: true,
      message: 'User updated successfully.',
      statusCode: HttpStatus.OK,
    };
  }

  @Delete('remove/:id')
  async removeUser(@Param('id') userId: string) {
    await this.userService.removeUser(userId);
    return {
      success: true,
      message: 'User removed successfully.',
      statusCode: HttpStatus.OK,
    };
  }

  @Get('city/:city')
  async findUsersByCity(@Param('city') city: string) {
    await this.userService.findUsersByCity(city);
    return {
      success: true,
      message: 'Success',
      statusCode: HttpStatus.FOUND,
    };
  }

  @Get('state/:state')
  async findUsersByState(@Param('state') state: string) {
    await this.userService.findUsersByState(state);
    return {
      success: true,
      message: 'Success',
      statusCode: HttpStatus.FOUND,
    };
  }
}
