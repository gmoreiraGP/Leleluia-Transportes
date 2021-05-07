import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { CustomAddressRepository } from './address.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Address, CustomAddressRepository])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
