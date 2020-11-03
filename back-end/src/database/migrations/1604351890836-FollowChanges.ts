import {MigrationInterface, QueryRunner} from "typeorm";

export class FollowChanges1604351890836 implements MigrationInterface {
    name = 'FollowChanges1604351890836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "follows" ("users_id" uuid NOT NULL, "follows_id" uuid, CONSTRAINT "UQ_c0b627d0c1494901b8d80c96d7f" UNIQUE ("users_id", "follows_id"), CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b" PRIMARY KEY ("users_id"))`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f" PRIMARY KEY ("users_id", "follows_id")`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "UQ_c0b627d0c1494901b8d80c96d7f"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b" PRIMARY KEY ("users_id")`);
        await queryRunner.query(`ALTER TABLE "follows" ALTER COLUMN "follows_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f" PRIMARY KEY ("users_id", "follows_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_d36c08f8b4434990df6dcf5fe5" ON "follows" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e937a8109c7e85e16910e02403" ON "follows" ("follows_id") `);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "UQ_c0b627d0c1494901b8d80c96d7f" UNIQUE ("users_id", "follows_id")`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_d36c08f8b4434990df6dcf5fe5b" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_e937a8109c7e85e16910e024033" FOREIGN KEY ("follows_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_e937a8109c7e85e16910e024033"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_d36c08f8b4434990df6dcf5fe5b"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "UQ_c0b627d0c1494901b8d80c96d7f"`);
        await queryRunner.query(`DROP INDEX "IDX_e937a8109c7e85e16910e02403"`);
        await queryRunner.query(`DROP INDEX "IDX_d36c08f8b4434990df6dcf5fe5"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b" PRIMARY KEY ("users_id")`);
        await queryRunner.query(`ALTER TABLE "follows" ALTER COLUMN "follows_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f" PRIMARY KEY ("users_id", "follows_id")`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "UQ_c0b627d0c1494901b8d80c96d7f" UNIQUE ("users_id", "follows_id")`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "PK_c0b627d0c1494901b8d80c96d7f"`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "PK_d36c08f8b4434990df6dcf5fe5b" PRIMARY KEY ("users_id")`);
        await queryRunner.query(`DROP TABLE "follows"`);
    }

}
