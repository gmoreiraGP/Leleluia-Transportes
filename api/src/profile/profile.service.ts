import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepo: Repository<Profile>,
  ){}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = await this.profileRepo.create(createProfileDto)
  
    return await this.profileRepo.save(profile)
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepo.find()
  }

  async findOne(id: string): Promise<Profile> {
    return await this.profileRepo.findOne(id)
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    const toUpdated = await this.profileRepo.findOne(id)
    const profileUpdated = Object.assign(toUpdated, updateProfileDto)
   
    return await this.profileRepo.save(profileUpdated)
  }
  
  async remove(id: string): Promise<DeleteResult> {
    return await this.profileRepo.delete(id)
  }
}
