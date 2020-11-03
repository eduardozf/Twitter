import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateEntityContents1604206819813 implements MigrationInterface {
    name = 'UpdateEntityContents1604206819813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6"`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6"`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_36b931b67c9e3fce96ef61d95e6" FOREIGN KEY ("tweet_id") REFERENCES "tweets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
