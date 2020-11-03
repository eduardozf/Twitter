import { MigrationInterface, QueryRunner } from "typeorm";

export class DropTableFollows1604351417042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "follows"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "follows" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid, "following_id" uuid, CONSTRAINT "UQ_d4d546cd279e12193c74e748829" UNIQUE ("user_id", "following_id"), CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_941d172275662c2b9d8b9f4270c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_c518e3988b9c057920afaf2d8c0" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
