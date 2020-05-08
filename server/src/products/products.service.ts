import { Injectable } from '@nestjs/common';
import { Product } from '@src/products/product.interface';

@Injectable()
export class ProductsService {
    getProducts(): Product[] {
        return [{ productId: 1, name: 'product 1' }];
    }
}
