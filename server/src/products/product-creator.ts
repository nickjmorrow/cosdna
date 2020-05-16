import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Product } from '@src/products/products.entity';
import { CreateProductModel } from '@src/products/create-product.model';

@Injectable()
export class ProductCreator {
    public constructor(private readonly connection: Connection) {}
    public async createProduct(
        createProductModel: CreateProductModel,
    ): Promise<Product> {
        const product = new Product(createProductModel);
        const result = await this.connection.manager.insert(Product, product);
        const productId = result.generatedMaps[0].productId;
        return this.connection.manager.findOneOrFail(Product, { productId });
    }
}
