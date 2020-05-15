import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeDatabase1589522064970 implements MigrationInterface {
    name = 'InitializeDatabase1589522064970';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = `
			CREATE SCHEMA ing;

			CREATE TABLE ing.products (
				product_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
			);
			
			CREATE TABLE ing.ingredients (
				ingredient_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
			);
			
			CREATE TABLE ing.products_ingredients_mapping (
				product_id INT NOT NULL REFERENCES ing.products(product_id)
				, ingredient_id INT NOT NULL REFERENCES ing.ingredients(ingredient_id)
				, PRIMARY KEY(product_id, ingredient_id)
			);
		`;
        await queryRunner.query(query);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const query = `
			DROP TABLE ing.products_ingredients_mapping;

			DROP TABLE ing.ingredients;

			DROP TABLE ing.products;

			DROP SCHEMA ing;
		`;
        await queryRunner.query(query);
    }
}
