import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>
  ){}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = this.addressRepo.create(createAddressDto)
    
    return await this.addressRepo.save(address)
  }

  async findAll(): Promise<Address[]> {
    return await this.addressRepo.find()
  }

  async findOne(id: string): Promise<Address> {
    return await this.addressRepo.findOne(id)
  }

  async update(id: string, updateAddressDto: UpdateAddressDto): Promise<Address> {
    const toUpdated = await this.addressRepo.findOne(id)
    const addressUpdated = Object.assign(toUpdated, updateAddressDto)
    return await this.addressRepo.save(addressUpdated)
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.addressRepo.delete(id)
  }
}
