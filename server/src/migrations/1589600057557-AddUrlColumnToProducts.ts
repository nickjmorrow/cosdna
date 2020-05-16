import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUrlColumnToProducts1589600057557 implements MigrationInterface {
    name = 'AddUrlColumnToProducts1589600057557';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = `
			ALTER TABLE ing.products
			ADD COLUMN url VARCHAR(12) NOT NULL;
		`;
        await queryRunner.query(query);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const query = `
			ALTER TABLE ing.products
			DROP COLUMN url;
		`;
        await queryRunner.query(query);
    }
}
