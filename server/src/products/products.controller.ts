import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '@src/products/products.service';
import { Product } from '@src/products/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Get()
    getAll(): Product[] {
        return this.productsService.getProducts();
    }

    @Get(':id')
    findOne(@Param() params): Product {
        console.log(params.id);
        return {
            productId: params.id,
            name: 'some product',
        };
    }
}
