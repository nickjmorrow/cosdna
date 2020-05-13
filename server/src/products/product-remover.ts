import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Product } from '@src/products/products.entity';
import { RemoveProductModel } from '@src/products/remove-product.model';

@Injectable()
export class ProductRemover {
    public constructor(private readonly connection: Connection) {}
    public removeProduct(product: RemoveProductModel) {
        return this.connection.manager.delete(Product, {
            productId: product.productId,
        });
    }
}
