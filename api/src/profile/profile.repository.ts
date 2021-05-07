import { EntityRepository, Repository } from 'typeorm';
import { Profile } from './entities/profile.entity'

@EntityRepository(Profile)
export class CustomProfileRepository extends Repository<Profile> {}