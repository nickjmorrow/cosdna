import {MigrationInterface, QueryRunner} from "typeorm";

export class BlueBlanket1589522064970 implements MigrationInterface {
    name = 'BlueBlanket1589522064970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ing"."ingredients" ("ingredient_id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_37c4c03efde86b7fd4c01678cc5" PRIMARY KEY ("ingredient_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "ing"."products_ingredients_mapping" ("product_id" integer NOT NULL, "ingredient_id" integer NOT NULL, CONSTRAINT "PK_805e5bd8431b8b1219b1334f4ea" PRIMARY KEY ("product_id", "ingredient_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_78367a8195621b7bea902853e1" ON "ing"."products_ingredients_mapping" ("product_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_44787ef170d346f850b06bf077" ON "ing"."products_ingredients_mapping" ("ingredient_id") `, undefined);
        await queryRunner.query(`CREATE SEQUENCE "ing"."products_product_id_seq" OWNED BY "ing"."products"."product_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" ALTER COLUMN "product_id" SET DEFAULT nextval('ing.products_product_id_seq')`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" ADD "name" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" ADD CONSTRAINT "FK_78367a8195621b7bea902853e1e" FOREIGN KEY ("product_id") REFERENCES "ing"."products"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" ADD CONSTRAINT "FK_44787ef170d346f850b06bf0774" FOREIGN KEY ("ingredient_id") REFERENCES "ing"."ingredients"("ingredient_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" ADD CONSTRAINT "FK_78367a8195621b7bea902853e1e" FOREIGN KEY ("product_id") REFERENCES "ing"."ingredients"("ingredient_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" ADD CONSTRAINT "FK_44787ef170d346f850b06bf0774" FOREIGN KEY ("ingredient_id") REFERENCES "ing"."products"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" DROP CONSTRAINT "FK_44787ef170d346f850b06bf0774"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" DROP CONSTRAINT "FK_78367a8195621b7bea902853e1e"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" DROP CONSTRAINT "FK_44787ef170d346f850b06bf0774"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products_ingredients_mapping" DROP CONSTRAINT "FK_78367a8195621b7bea902853e1e"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" ADD "name" character varying(255) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "ing"."products" ALTER COLUMN "product_id" DROP DEFAULT`, undefined);
        await queryRunner.query(`DROP SEQUENCE "ing"."products_product_id_seq"`, undefined);
        await queryRunner.query(`DROP INDEX "ing"."IDX_44787ef170d346f850b06bf077"`, undefined);
        await queryRunner.query(`DROP INDEX "ing"."IDX_78367a8195621b7bea902853e1"`, undefined);
        await queryRunner.query(`DROP TABLE "ing"."products_ingredients_mapping"`, undefined);
        await queryRunner.query(`DROP TABLE "ing"."ingredients"`, undefined);
    }

}
