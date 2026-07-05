import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.productsRepo.create(dto);
    return this.productsRepo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepo.find();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productsRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
}
