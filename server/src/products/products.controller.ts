import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
    Query,
} from '@nestjs/common';
import { Product } from '@src/products/product.interface';
import { ProductProvider } from '@src/products/product-provider';
import { ProductCreator } from '@src/products/product-creator';
import { CreateProductModel } from '@src/products/create-product.model';
import { ProductRemover } from '@src/products/product-remover';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productProvider: ProductProvider,
        private readonly productCreator: ProductCreator,
        private readonly productRemover: ProductRemover,
    ) {}

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productProvider.getAllProducts();
    }

    @Get(':productId')
    getOneProduct(@Param() params): Promise<Product> {
        return this.productProvider.getOneProduct(params.url);
    }

    @Post()
    createProduct(@Body() body: Body) {
        return this.productCreator.createProduct(
            (body as unknown) as CreateProductModel,
        );
    }

    @Delete()
    removeProduct(@Query() params) {
        console.log(params);
        return this.productRemover.removeProduct({
            productId: params.productId,
        });
    }
}
