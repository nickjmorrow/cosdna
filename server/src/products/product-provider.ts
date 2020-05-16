import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Product } from '@src/products/products.entity';

@Injectable()
export class ProductProvider {
    public constructor(private readonly connection: Connection) {}
    public getAllProducts(): Promise<Product[]> {
        return this.connection.manager.find(Product, {
            relations: ['ingredients'],
        });
    }

    public getOneProduct(url: string): Promise<Product> {
        return this.connection.manager.findOneOrFail(
            Product,
            { url },
            { relations: ['ingredients'] },
        );
    }
}
