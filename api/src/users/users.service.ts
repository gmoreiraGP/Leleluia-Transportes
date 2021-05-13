import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,


  ){}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(createUserDto)

    return await this.userRepo.save(user)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find()
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepo.findOne(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const toUpdated = await this.userRepo.findOne(id)
    const userUpdated = Object.assign(toUpdated, updateUserDto)
    return await this.userRepo.save(userUpdated)
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.userRepo.delete(id)
  }

  // async updateProfile(id: string, updateUserDto: UpdateUserDto): Promise<User>{
  //   const toUpdated = await this.userRepo.findOne(id)
  //   const userUpdated = Object.assign(toUpdated, updateUserDto)
  //   return await this.userRepo.save(userUpdated)
  // }
}
