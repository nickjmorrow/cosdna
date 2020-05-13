import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateProductModel } from '@src/products/create-product.model';

@Entity({ schema: 'ing', name: 'products' })
export class Product {
    @PrimaryGeneratedColumn({ name: 'product_id' })
    public productId!: number;

    @Column({ name: 'name' })
    public name!: string;

    constructor(productDto: CreateProductModel) {
        if (productDto) {
            this.name = name;
        }
    }
}
