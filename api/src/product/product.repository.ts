import { EntityRepository, Repository } from 'typeorm';
import { Product } from './entities/product.entity'

@EntityRepository(Product)
export class CustomProductRepository extends Repository<Product> {}