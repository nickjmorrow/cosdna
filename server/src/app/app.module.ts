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
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT!, 10),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: [Product, Ingredient],
            url: process.env.DATABASE_URL,
            migrationsRun: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
