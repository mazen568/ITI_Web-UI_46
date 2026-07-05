import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1783160688287 implements MigrationInterface {
    name = 'InitialSchema1783160688287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_products" ("order_id" uuid NOT NULL, "product_id" uuid NOT NULL, CONSTRAINT "PK_df651f408724961907ab06672fa" PRIMARY KEY ("order_id", "product_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f258ce2f670b34b38630914cf9" ON "order_products"  ("order_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2d58e8bd11dc840b39f99824d8" ON "order_products"  ("product_id") `);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "clientId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_f258ce2f670b34b38630914cf9e" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_2d58e8bd11dc840b39f99824d84" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_2d58e8bd11dc840b39f99824d84"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_f258ce2f670b34b38630914cf9e"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "clientId" integer NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2d58e8bd11dc840b39f99824d8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f258ce2f670b34b38630914cf9"`);
        await queryRunner.query(`DROP TABLE "order_products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
