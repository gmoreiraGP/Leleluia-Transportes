import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity'

@EntityRepository(User)
export class CustomUserRepository extends Repository<User> {}