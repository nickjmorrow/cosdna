import { Module } from '@nestjs/common';
import { AppController } from '@src/app/app.controller';
import { AppService } from '@src/app/app.service';
import { ProductsModule, Product } from '@src/products';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from '@src/ingredients/ingredients.module';
import { Ingredient } from '@src/ingredients';
import { ormConfig } from '@src/ormConfig';

@Module({
    imports: [
        ProductsModule,
        IngredientsModule,
        TypeOrmModule.forRoot(ormConfig),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
