import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CustomProductRepository } from './product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product, CustomProductRepository])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
