import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { CustomProfileRepository } from './profile.repository'
@Module({
  imports: [TypeOrmModule.forFeature([Profile, CustomProfileRepository])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
