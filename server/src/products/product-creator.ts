import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Product } from '@src/products/products.entity';
import { CreateProductModel } from '@src/products/create-product.model';

@Injectable()
export class ProductCreator {
    public constructor(private readonly connection: Connection) {}
    public createProduct(product: CreateProductModel) {
        return this.connection.manager.insert(Product, product);
    }
}
