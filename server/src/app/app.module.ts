import { Module } from '@nestjs/common';
import { AppController } from '@src/app/app.controller';
import { AppService } from '@src/app/app.service';
import { ProductsModule } from '@src/products';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from '@src/ingredients/ingredients.module';
import * as ormconfig from '@src/ormconfig';

@Module({
    imports: [
        ProductsModule,
        IngredientsModule,
        TypeOrmModule.forRoot(ormconfig),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
