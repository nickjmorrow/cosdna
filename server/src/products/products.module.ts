import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductProvider } from './product-provider';
import { ProductCreator } from '@src/products/product-creator';
import { ProductRemover } from '@src/products/product-remover';

@Module({
    providers: [ProductProvider, ProductCreator, ProductRemover],
    controllers: [ProductsController],
})
export class ProductsModule {}
