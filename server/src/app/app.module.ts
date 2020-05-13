import { Module } from '@nestjs/common';
import { AppController } from '@src/app/app.controller';
import { AppService } from '@src/app/app.service';
import { ProductsModule, Product } from '@src/products';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from '@src/ingredients/ingredients.module';
import { Ingredient } from '@src/ingredients';

@Module({
    imports: [
        ProductsModule,
        IngredientsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            port: 5432,
            entities: [Product, Ingredient],
            url: process.env.DATABASE_URL,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
