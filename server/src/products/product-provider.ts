import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Product } from '@src/products/products.entity';

@Injectable()
export class ProductProvider {
    public constructor(private readonly connection: Connection) {}
    public getProducts(): Promise<Product[]> {
        return this.connection.manager.find(Product, {
            relations: ['ingredients'],
        });
    }
}
