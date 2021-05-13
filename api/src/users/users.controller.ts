import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from 'src/profile/dto/update-profile.dto';
import { ProfileService } from 'src/profile/profile.service';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,

    private readonly profileService: ProfileService
    ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }

  // PROFILE
  // @Patch(':id/profile')
  // async updateProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, createProfileDto: CreateProfileDto) {
  //   const profile = await this.profileService.create(createProfileDto)

  //   return await this.usersService.updateProfile(id, updateUserDto)
  // }
}
