import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { CreateIngredientModel } from '@src/ingredients/create-ingredient.model';
import { Product } from '@src/products';

@Entity({ schema: 'ing', name: 'ingredients' })
export class Ingredient {
    @PrimaryGeneratedColumn({ name: 'ingredient_id' })
    public ingredientId!: number;

    @Column({ name: 'name' })
    public name!: string;

    @ManyToMany(
        type => Product,
        product => product.ingredients,
    )
    @JoinTable({
        name: 'products_ingredients_mapping',
        joinColumn: { name: 'product_id' },
        inverseJoinColumn: { name: 'ingredient_id' },
    })
    public products!: Product[];

    constructor(createIngredientModel: CreateIngredientModel) {
        if (createIngredientModel) {
            this.name = name;
        }
    }
}
