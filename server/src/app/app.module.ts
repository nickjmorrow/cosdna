import { Module } from '@nestjs/common';
import { AppController } from '@src/app/app.controller';
import { AppService } from '@src/app/app.service';
import { UsersModule } from '@src/users/users.module';
import { ProductsModule, Product } from '@src/products';
import { RecommendationsModule } from '@src/recommendations/recommendations.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        UsersModule,
        ProductsModule,
        RecommendationsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            port: 5432,
            entities: [Product],
            url: process.env.DATABASE_URL,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
