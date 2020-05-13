import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { CreateProductModel } from '@src/products/create-product.model';
import { Ingredient } from '@src/ingredients/ingredients.entity';

@Entity({ schema: 'ing', name: 'products' })
export class Product {
    @PrimaryGeneratedColumn({ name: 'product_id' })
    public productId!: number;

    @Column({ name: 'name' })
    public name!: string;

    @ManyToMany(
        type => Ingredient,
        ingredient => ingredient.products,
    )
    @JoinTable({
        name: 'products_ingredients_mapping',
        joinColumn: { name: 'product_id' },
        inverseJoinColumn: { name: 'ingredient_id' },
    })
    public ingredients!: Ingredient[];

    constructor(productDto: CreateProductModel) {
        if (productDto) {
            this.name = name;
        }
    }
}
